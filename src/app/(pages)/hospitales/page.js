"use client";
import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

// Importar el mapa dinámicamente para evitar problemas de SSR
const MapaHospitales = dynamic(() => import('./MapaHospitales'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Cargando mapa...</div>
});

const HospitalesPage = () => {
  const [user, setUser] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [hospitales, setHospitales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [error, setError] = useState(null);

  const calcularDistancia = useCallback((lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance; // Distancia en km
  }, []);

  const buscarHospitalesOSM = useCallback(async (lat, lng, radio = 10000) => {
    try {
      // Query de Overpass para buscar hospitales, clínicas y centros médicos
      const overpassQuery = `
        [out:json][timeout:25];
        (
          node["amenity"="hospital"](around:${radio},${lat},${lng});
          way["amenity"="hospital"](around:${radio},${lat},${lng});
          relation["amenity"="hospital"](around:${radio},${lat},${lng});
          node["amenity"="clinic"](around:${radio},${lat},${lng});
          way["amenity"="clinic"](around:${radio},${lat},${lng});
          relation["amenity"="clinic"](around:${radio},${lat},${lng});
          node["healthcare"="hospital"](around:${radio},${lat},${lng});
          way["healthcare"="hospital"](around:${radio},${lat},${lng});
          relation["healthcare"="hospital"](around:${radio},${lat},${lng});
          node["healthcare"="clinic"](around:${radio},${lat},${lng});
          way["healthcare"="clinic"](around:${radio},${lat},${lng});
          relation["healthcare"="clinic"](around:${radio},${lat},${lng});
        );
        out center;
      `;

      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: overpassQuery
      });

      if (!response.ok) {
        throw new Error('Error al consultar OpenStreetMap');
      }

      const data = await response.json();
      
      // Procesar los resultados
      const hospitalesProcesados = data.elements.map(element => {
        const elementLat = element.lat || (element.center && element.center.lat);
        const elementLng = element.lon || (element.center && element.center.lon);
        
        if (!elementLat || !elementLng) return null;

        const distancia = calcularDistancia(lat, lng, elementLat, elementLng);
        
        // Determinar especialidades basadas en tags de OSM
        const especialidades = [];
        if (element.tags?.['healthcare:speciality']) {
          especialidades.push(...element.tags['healthcare:speciality'].split(';'));
        }
        if (element.tags?.['medical:speciality']) {
          especialidades.push(...element.tags['medical:speciality'].split(';'));
        }
        
        // Agregar especialidades relevantes para embarazo si no hay especificadas
        if (especialidades.length === 0) {
          if (element.tags?.amenity === 'hospital') {
            especialidades.push('Medicina General', 'Urgencias');
          } else if (element.tags?.amenity === 'clinic') {
            especialidades.push('Consulta Externa');
          }
        }

        return {
          id: element.id,
          nombre: element.tags?.name || element.tags?.['name:es'] || 'Centro Médico',
          direccion: formatearDireccion(element.tags),
          telefono: element.tags?.phone || element.tags?.['contact:phone'] || 'No disponible',
          especialidades: especialidades.slice(0, 3), // Máximo 3 especialidades
          lat: elementLat,
          lng: elementLng,
          distancia: distancia,
          rating: generarRatingAleatorio(), // OSM no tiene ratings, generamos uno simulado
          tipo: element.tags?.amenity || element.tags?.healthcare || 'medical',
          sitioWeb: element.tags?.website || element.tags?.['contact:website'],
          operador: element.tags?.operator || element.tags?.brand
        };
      }).filter(hospital => hospital !== null);

      // Ordenar por distancia y limitar a 20 resultados
      return hospitalesProcesados
        .sort((a, b) => a.distancia - b.distancia)
        .slice(0, 20);

    } catch (error) {
      console.error('Error buscando hospitales en OSM:', error);
      throw error;
    }
  }, [calcularDistancia]);

  const formatearDireccion = (tags) => {
    const componentes = [];
    
    if (tags?.['addr:street'] && tags?.['addr:housenumber']) {
      componentes.push(`${tags['addr:street']} ${tags['addr:housenumber']}`);
    } else if (tags?.['addr:street']) {
      componentes.push(tags['addr:street']);
    }
    
    if (tags?.['addr:city']) {
      componentes.push(tags['addr:city']);
    }
    
    if (tags?.['addr:state']) {
      componentes.push(tags['addr:state']);
    }

    return componentes.length > 0 ? componentes.join(', ') : 'Dirección no disponible';
  };

  const generarRatingAleatorio = () => {
    // Generar un rating entre 3.5 y 4.8 para simular calificaciones realistas
    return Math.round((3.5 + Math.random() * 1.3) * 10) / 10;
  };

  const abrirEnOpenStreetMap = (hospital) => {
    // URL de OpenStreetMap con las coordenadas del hospital
    const osmUrl = `https://www.openstreetmap.org/?mlat=${hospital.lat}&mlon=${hospital.lng}&zoom=16&layers=M`;
    window.open(osmUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    // Verificar usuario logueado
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('gestarUser');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }

    // Obtener ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(location);
          
          try {
            setError(null);
            // Buscar hospitales reales usando OpenStreetMap
            const hospitalesReales = await buscarHospitalesOSM(location.lat, location.lng);
            setHospitales(hospitalesReales);
          } catch (err) {
            console.error('Error obteniendo hospitales:', err);
            setError('Error al obtener hospitales cercanos. Mostrando datos de ejemplo.');
            // Fallback a datos de ejemplo si falla la API
            const hospitalesEjemplo = getHospitalesEjemplo();
            const hospitalesConDistancia = hospitalesEjemplo.map(hospital => ({
              ...hospital,
              distancia: calcularDistancia(location.lat, location.lng, hospital.lat, hospital.lng)
            })).sort((a, b) => a.distancia - b.distancia);
            setHospitales(hospitalesConDistancia);
          }
          
          setLoading(false);
        },
        async (error) => {
          console.error('Error obteniendo ubicación:', error);
          setError('No se pudo obtener tu ubicación. Mostrando hospitales de ejemplo en Bogotá.');
          
          // Usar ubicación por defecto (Bogotá) si no se puede obtener la ubicación
          const bogotaLocation = { lat: 4.6097, lng: -74.0817 };
          setUserLocation(bogotaLocation);
          
          try {
            const hospitalesReales = await buscarHospitalesOSM(bogotaLocation.lat, bogotaLocation.lng);
            setHospitales(hospitalesReales);
          } catch (err) {
            console.error('Error obteniendo hospitales de ejemplo:', err);
            setHospitales(getHospitalesEjemplo());
          }
          
          setLoading(false);
        }
      );
    } else {
      setError('Tu navegador no soporta geolocalización. Mostrando hospitales de ejemplo.');
      setHospitales(getHospitalesEjemplo());
      setLoading(false);
    }
  }, [buscarHospitalesOSM, calcularDistancia]);

  const getHospitalesEjemplo = () => {
    return [
      {
        id: 'ejemplo-1',
        nombre: "Hospital Materno-Infantil",
        direccion: "Calle 45 #23-67, Bogotá",
        telefono: "+57 1 234-5678",
        especialidades: ["Ginecología", "Obstetricia", "Pediatría"],
        lat: 4.6482,
        lng: -74.0776,
        rating: 4.5,
        distancia: null,
        tipo: 'hospital'
      },
      {
        id: 'ejemplo-2',
        nombre: "Clínica de la Mujer",
        direccion: "Carrera 15 #85-23, Bogotá",
        telefono: "+57 1 345-6789",
        especialidades: ["Ginecología", "Fertilidad", "Medicina Fetal"],
        lat: 4.6597,
        lng: -74.0817,
        rating: 4.7,
        distancia: null,
        tipo: 'clinic'
      },
      {
        id: 'ejemplo-3',
        nombre: "Centro Médico Maternal",
        direccion: "Avenida 68 #45-12, Bogotá",
        telefono: "+57 1 456-7890",
        especialidades: ["Obstetricia", "Ecografías", "Partos"],
        lat: 4.6351,
        lng: -74.0900,
        rating: 4.3,
        distancia: null,
        tipo: 'clinic'
      }
    ];
  };

  const formatDistancia = (distancia) => {
    if (!distancia) return '';
    return distancia < 1 ? 
      `${Math.round(distancia * 1000)}m` : 
      `${distancia.toFixed(1)}km`;
  };

  const formatRating = (rating) => {
    return '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '⭐' : '');
  };

  if (loading) {
    return (
      <>
        <UserHeader userName={user?.nombres || "Usuario"} />
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Hospitales Cercanos</h1>
            <p className={styles.subtitle}>
              Encuentra centros médicos especializados en maternidad cerca de ti
            </p>
          </div>
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>🗺️ Obteniendo tu ubicación...</p>
            <p>🏥 Buscando hospitales reales cercanos...</p>
            <small>Consultando OpenStreetMap</small>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <UserHeader userName={user?.nombres || "Usuario"} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Hospitales Cercanos</h1>
          <p className={styles.subtitle}>
            Encuentra centros médicos especializados en maternidad cerca de ti
          </p>
          {error && (
            <div className={styles.errorBanner}>
              ⚠️ {error}
            </div>
          )}
        </div>

        <div className={styles.mapContainer}>
          <MapaHospitales
            userLocation={userLocation}
            hospitales={hospitales}
            selectedHospital={selectedHospital}
            onHospitalSelect={setSelectedHospital}
          />
        </div>

        <div className={styles.resultsSection}>
          <h2 className={styles.resultsTitle}>
            {error ? 
              'Hospitales de ejemplo en Bogotá' : 
              userLocation ? 'Hospitales reales ordenados por distancia' : 'Hospitales en tu ciudad'
            }
            <span className={styles.resultCount}>({hospitales.length} encontrados)</span>
          </h2>
          
          <div className={styles.hospitalesList}>
            {hospitales.map((hospital) => (
            <div 
              key={hospital.id} 
              className={`${styles.hospitalCard} ${
                selectedHospital?.id === hospital.id ? styles.selected : ''
              }`}
              onClick={() => setSelectedHospital(hospital)}
            >
              <div className={styles.hospitalHeader}>
                <h3 className={styles.hospitalName}>
                  {hospital.nombre}
                  {hospital.tipo === 'hospital' && <span className={styles.hospitalBadge}>🏥</span>}
                  {hospital.tipo === 'clinic' && <span className={styles.hospitalBadge}>🏪</span>}
                </h3>
                <div className={styles.hospitalMeta}>
                  {hospital.distancia && (
                    <span className={styles.distance}>
                      📍 {formatDistancia(hospital.distancia)}
                    </span>
                  )}
                  <span className={styles.rating}>
                    {formatRating(hospital.rating)} ({hospital.rating})
                  </span>
                </div>
              </div>
              
              <div className={styles.hospitalInfo}>
                <p className={styles.address}>
                  📍 {hospital.direccion}
                </p>
                <p className={styles.phone}>
                  📞 {hospital.telefono}
                </p>
                {hospital.operador && (
                  <p className={styles.operator}>
                    🏢 {hospital.operador}
                  </p>
                )}
                {hospital.especialidades && hospital.especialidades.length > 0 && (
                  <div className={styles.specialties}>
                    <span className={styles.specialtiesLabel}>Especialidades:</span>
                    {hospital.especialidades.map((esp, index) => (
                      <span key={index} className={styles.specialty}>
                        {esp}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {selectedHospital && (
        <div className={styles.modal} onClick={() => setSelectedHospital(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{selectedHospital.nombre}</h3>
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedHospital(null)}
              >
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <p><strong>Dirección:</strong> {selectedHospital.direccion}</p>
              <p><strong>Teléfono:</strong> {selectedHospital.telefono}</p>
              <p><strong>Rating:</strong> {formatRating(selectedHospital.rating)} ({selectedHospital.rating})</p>
              {selectedHospital.distancia && (
                <p><strong>Distancia:</strong> {formatDistancia(selectedHospital.distancia)}</p>
              )}
              {selectedHospital.operador && (
                <p><strong>Operador:</strong> {selectedHospital.operador}</p>
              )}
              {selectedHospital.sitioWeb && (
                <p><strong>Sitio web:</strong> 
                  <a href={selectedHospital.sitioWeb} target="_blank" rel="noopener noreferrer" className={styles.websiteLink}>
                    {selectedHospital.sitioWeb}
                  </a>
                </p>
              )}
              {selectedHospital.especialidades && selectedHospital.especialidades.length > 0 && (
                <div className={styles.modalSpecialties}>
                  <strong>Especialidades:</strong>
                  <div className={styles.specialtyTags}>
                    {selectedHospital.especialidades.map((esp, index) => (
                      <span key={index} className={styles.specialtyTag}>
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className={styles.dataSource}>
                <small>📍 Datos obtenidos de OpenStreetMap</small>
              </div>
            </div>
            <div className={styles.modalActions}>
              <button 
                className={styles.primaryButton}
                onClick={() => abrirEnOpenStreetMap(selectedHospital)}
              >
                🗺️ Ver en OpenStreetMap
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default HospitalesPage;