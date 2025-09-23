"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// Configurar íconos personalizados
const createCustomIcon = (color, symbol) => {
  return L.divIcon({
    html: `<div style="
      background-color: ${color};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: white;
      font-weight: bold;
    ">${symbol}</div>`,
    className: 'custom-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });
};

const userIcon = createCustomIcon('#ff69b4', '📍');
const hospitalIcon = createCustomIcon('#e74c3c', '🏥');
const clinicIcon = createCustomIcon('#3498db', '🏪');

// Componente para centrar el mapa cuando cambian las coordenadas
const MapUpdater = ({ center, zoom }) => {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
  }, [map, center, zoom]);

  return null;
};

const MapaHospitales = ({ 
  userLocation, 
  hospitales, 
  selectedHospital, 
  onHospitalSelect 
}) => {
  const defaultCenter = userLocation || [4.6097, -74.0817]; // Bogotá como fallback
  const defaultZoom = userLocation ? 13 : 11;

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapUpdater 
          center={selectedHospital ? [selectedHospital.lat, selectedHospital.lng] : defaultCenter}
          zoom={selectedHospital ? 16 : defaultZoom}
        />

        {/* Marcador de ubicación del usuario */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <strong>📍 Tu ubicación</strong>
                <br />
                <small>Lat: {userLocation.lat.toFixed(4)}</small>
                <br />
                <small>Lng: {userLocation.lng.toFixed(4)}</small>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Marcadores de hospitales */}
        {hospitales.map((hospital) => {
          const icon = hospital.tipo === 'hospital' ? hospitalIcon : clinicIcon;
          const isSelected = selectedHospital?.id === hospital.id;
          
          return (
            <Marker
              key={hospital.id}
              position={[hospital.lat, hospital.lng]}
              icon={icon}
              eventHandlers={{
                click: () => {
                  onHospitalSelect(hospital);
                },
              }}
            >
              <Popup>
                <div style={{ minWidth: '200px' }}>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    color: '#ff69b4',
                    fontSize: '16px'
                  }}>
                    {hospital.tipo === 'hospital' ? '🏥' : '🏪'} {hospital.nombre}
                  </h3>
                  <p style={{ margin: '4px 0', fontSize: '14px' }}>
                    📍 {hospital.direccion}
                  </p>
                  <p style={{ margin: '4px 0', fontSize: '14px' }}>
                    📞 {hospital.telefono}
                  </p>
                  {hospital.distancia && (
                    <p style={{ margin: '4px 0', fontSize: '14px', color: '#ff69b4', fontWeight: 'bold' }}>
                      📏 {hospital.distancia < 1 ? 
                        `${Math.round(hospital.distancia * 1000)}m` : 
                        `${hospital.distancia.toFixed(1)}km`
                      }
                    </p>
                  )}
                  {hospital.especialidades && hospital.especialidades.length > 0 && (
                    <div style={{ marginTop: '8px' }}>
                      <strong style={{ fontSize: '12px' }}>Especialidades:</strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                        {hospital.especialidades.slice(0, 2).map((esp, index) => (
                          <span
                            key={index}
                            style={{
                              background: '#ffeef8',
                              color: '#ff69b4',
                              padding: '2px 6px',
                              borderRadius: '8px',
                              fontSize: '11px',
                              border: '1px solid #ffd1e8'
                            }}
                          >
                            {esp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => onHospitalSelect(hospital)}
                    style={{
                      background: '#ff69b4',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      marginTop: '8px',
                      width: '100%'
                    }}
                  >
                    Ver detalles
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapaHospitales;