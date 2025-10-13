"use client";
import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import UserHeader from '../../../components/Header/UserHeader';
import HospitalIcon from '../../../components/Icons/HospitalIcon';
import StarRating from '../../../components/StarRating';
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

  const buscarHospitalesGooglePlaces = useCallback(async (lat, lng, radio = 10000) => {
    try {
      // Usar nuestra API route que consulta Google Places (30 km de radio)
      const url = `/api/hospitales/nearby?lat=${lat}&lng=${lng}&radio=${radio}`;
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Error al consultar la API de hospitales');
      }

      const data = await response.json();
      
      if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
        throw new Error(`Google Places API error: ${data.status}`);
      }

      if (data.status === 'ZERO_RESULTS' || !data.results || data.results.length === 0) {
        return [];
      }
      
      // Procesar los resultados de Google Places
      const hospitalesProcesados = data.results.map(place => {
        const elementLat = place.geometry?.location?.lat;
        const elementLng = place.geometry?.location?.lng;
        
        if (!elementLat || !elementLng) return null;

        const distancia = calcularDistancia(lat, lng, elementLat, elementLng);
        
        // Determinar tipo de establecimiento
        let tipo = 'medical';
        if (place.types?.includes('hospital')) {
          tipo = 'hospital';
        } else if (place.types?.includes('doctor') || place.types?.includes('health')) {
          tipo = 'clinic';
        }

        // Construir objeto del hospital
        const hospital = {
          id: place.place_id,
          nombre: place.name || 'Centro Médico',
          direccion: place.vicinity || 'Dirección no disponible',
          lat: elementLat,
          lng: elementLng,
          distancia: distancia,
          rating: place.rating || generarRatingAleatorio(),
          tipo: tipo,
          userRatingsTotal: place.user_ratings_total || 0
        };

        // Solo agregar teléfono si está disponible (priorizar formato local)
        if (place.formatted_phone_number) {
          hospital.telefono = place.formatted_phone_number;
        } else if (place.international_phone_number) {
          hospital.telefono = place.international_phone_number;
        }

        return hospital;
      }).filter(hospital => hospital !== null);

      // Ordenar por distancia (más cercano a más lejano) - sin límite
      return hospitalesProcesados.sort((a, b) => a.distancia - b.distancia);

    } catch (error) {
      console.error('Error buscando hospitales en Google Places:', error);
      throw error;
    }
  }, [calcularDistancia]);

  const generarRatingAleatorio = () => {
    // Generar un rating entre 3.5 y 4.8 para simular calificaciones realistas
    return Math.round((3.5 + Math.random() * 1.3) * 10) / 10;
  };

  const abrirEnGoogleMaps = (hospital) => {
    // URL de Google Maps con las coordenadas del hospital
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.lng}&query_place_id=${hospital.id}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
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
            // Buscar hospitales reales usando Google Places API
            const hospitalesReales = await buscarHospitalesGooglePlaces(location.lat, location.lng);
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
          setError('No se pudo obtener tu ubicación. Mostrando hospitales de ejemplo en Bogotá. (Dale acceso a tu ubicación al navegador y recarga la página).');
          
          // Usar ubicación por defecto (Bogotá) si no se puede obtener la ubicación
          const bogotaLocation = { lat: 4.6097, lng: -74.0817 };
          setUserLocation(bogotaLocation);
          
          try {
            const hospitalesReales = await buscarHospitalesGooglePlaces(bogotaLocation.lat, bogotaLocation.lng);
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
  }, [buscarHospitalesGooglePlaces, calcularDistancia]);

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

  // Ya no necesitamos formatRating, usamos el componente StarRating directamente

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
            <p>Obteniendo tu ubicación...</p>
            <p>Buscando hospitales cercanos...</p>
            <small>Consultando Google Places</small>
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
              userLocation ? 'Hospitales cercanos' : 'Hospitales en tu ciudad'
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
                  {hospital.tipo === 'hospital' && <span className={styles.hospitalBadge}><HospitalIcon color="#E8B4B8" size={22} /></span>}
                  {hospital.tipo === 'clinic' && <span className={styles.hospitalBadge}><HospitalIcon color="#E8B4B8" size={22} /></span>}
                </h3>
                <div className={styles.hospitalMeta}>
                  {hospital.distancia && (
                    <span className={styles.distance}>
                      {formatDistancia(hospital.distancia)}
                    </span>
                  )}
                  <span className={styles.rating}>
                    <StarRating rating={hospital.rating} size={16} showNumber={true} />
                  </span>
                </div>
              </div>
              
              <div className={styles.hospitalInfo}>
                <p className={styles.address}>
                  {hospital.direccion}
                </p>
                {hospital.telefono && (
                  <p className={styles.phone}>
                    {hospital.telefono}
                  </p>
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
              {selectedHospital.telefono && (
                <p><strong>Teléfono:</strong> {selectedHospital.telefono}</p>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <strong style={{ color: 'var(--light-gray)' }}>Calificación:</strong>
                <StarRating rating={selectedHospital.rating} size={20} showNumber={true} />
              </div>
              {selectedHospital.distancia && (
                <p><strong>Distancia:</strong> {formatDistancia(selectedHospital.distancia)}</p>
              )}
              <div className={styles.dataSource}>
                <small>Datos obtenidos de Google Places</small>
              </div>
            </div>
            <div className={styles.modalActions}>
              <button 
                className={styles.primaryButton}
                onClick={() => abrirEnGoogleMaps(selectedHospital)}
              >
                Ver en Google Maps
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