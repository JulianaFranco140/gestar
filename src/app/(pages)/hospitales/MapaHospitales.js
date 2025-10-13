"use client";
import { useEffect, useState } from 'react';

const MapaHospitales = ({ 
  userLocation, 
  hospitales, 
  selectedHospital, 
  onHospitalSelect 
}) => {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    if (selectedHospital) {
      // Mostrar hospital seleccionado con un marcador
      const query = encodeURIComponent(selectedHospital.nombre);
      const url = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${query}&center=${selectedHospital.lat},${selectedHospital.lng}&zoom=16&language=es`;
      setMapUrl(url);
    } else if (userLocation) {
      // Buscar "hospitales maternidad" cerca de la ubicación del usuario (igual que la API)
      const url = `https://www.google.com/maps/embed/v1/search?key=${GOOGLE_API_KEY}&q=hospitales+maternidad&center=${userLocation.lat},${userLocation.lng}&zoom=12&language=es`;
      setMapUrl(url);
    } else {
      // Buscar "hospitales maternidad" en Bogotá por defecto
      const url = `https://www.google.com/maps/embed/v1/search?key=${GOOGLE_API_KEY}&q=hospitales+maternidad&center=4.6097,-74.0817&zoom=11&language=es`;
      setMapUrl(url);
    }
  }, [userLocation, selectedHospital, GOOGLE_API_KEY]);

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      {mapUrl ? (
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
        />
      ) : (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          color: '#ff69b4',
          fontSize: '18px'
        }}>
          Cargando mapa...
        </div>
      )}
    </div>
  );
};

export default MapaHospitales;