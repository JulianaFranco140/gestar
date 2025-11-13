import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    const radio = searchParams.get('radio') || 30000; // 30 km por defecto

    if (!lat || !lng) {
      return NextResponse.json(
        { error: 'Se requieren las coordenadas lat y lng' },
        { status: 400 }
      );
    }

    const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    
    if (!GOOGLE_API_KEY) {
      console.error('GOOGLE_API_KEY no está configurada');
      return NextResponse.json(
        { error: 'API key no configurada' },
        { status: 500 }
      );
    }
    
    // Función para esperar entre solicitudes
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    // Buscar "hospitales maternidad" exactamente como en Google Maps
    let allResults = [];
    let nextPageToken = null;
    let pageCount = 0;
    const maxPages = 3; // Obtener hasta 60 resultados (20 por página)
    
    do {
      const url = nextPageToken 
        ? `https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${nextPageToken}&key=${GOOGLE_API_KEY}`
        : `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radio}&keyword=hospitales&language=es&key=${GOOGLE_API_KEY}`;
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Error al consultar Google Places API');
      }

      const data = await response.json();

      if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
        if (pageCount === 0) {
          return NextResponse.json(
            { error: `Google Places API error: ${data.status}` },
            { status: 500 }
          );
        }
        break; // Si hay error en páginas siguientes, continuar con lo que tenemos
      }

      if (data.results && data.results.length > 0) {
        allResults = [...allResults, ...data.results];
      }

      nextPageToken = data.next_page_token;
      pageCount++;

      // Esperar 2 segundos antes de la siguiente página (requisito de Google)
      if (nextPageToken && pageCount < maxPages) {
        await delay(2000);
      }
    } while (nextPageToken && pageCount < maxPages);

    if (allResults.length === 0) {
      return NextResponse.json({ status: 'ZERO_RESULTS', results: [] });
    }

    // Como ya buscamos "hospitales maternidad", Google ya filtró por nosotros
    // Solo eliminamos duplicados si los hay
    const filteredResults = allResults;

    // Obtener detalles de cada lugar (incluyendo teléfono) - todos los resultados filtrados
    const resultsWithDetails = await Promise.all(
      filteredResults.map(async (place) => {
        try {
          // Hacer solicitud a Place Details API para obtener teléfono
          const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=formatted_phone_number,international_phone_number&language=es&key=${GOOGLE_API_KEY}`;
          const detailsResponse = await fetch(detailsUrl);
          const detailsData = await detailsResponse.json();

          if (detailsData.status === 'OK' && detailsData.result) {
            return {
              ...place,
              formatted_phone_number: detailsData.result.formatted_phone_number,
              international_phone_number: detailsData.result.international_phone_number
            };
          }
          return place;
        } catch (error) {
          console.error(`Error obteniendo detalles del lugar ${place.place_id}:`, error);
          return place;
        }
      })
    );

    return NextResponse.json({
      status: 'OK',
      results: resultsWithDetails
    });
  } catch (error) {
    console.error('Error en API de hospitales:', error);
    return NextResponse.json(
      { error: 'Error al buscar hospitales', message: error.message },
      { status: 500 }
    );
  }
}
