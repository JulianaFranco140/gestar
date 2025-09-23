"use client";
// Consejos por semana
const consejosPorSemana = {
  1: {
    titulo: '🌟 El Milagro Comienza',
    bebe: 'Aún no está concebido, pero tu cuerpo prepara el óvulo.',
    alimentacion: 'Ácido fólico (espinaca, brócoli, lentejas) y proteínas.',
    cuidados: 'Evita alcohol, tabaco y medicamentos sin receta.'
  },
  2: {
    titulo: '🌟 El Milagro Comienza',
    bebe: 'Aún no está concebido, pero tu cuerpo prepara el óvulo.',
    alimentacion: 'Ácido fólico (espinaca, brócoli, lentejas) y proteínas.',
    cuidados: 'Evita alcohol, tabaco y medicamentos sin receta.'
  },
  3: {
    titulo: '🎯 La Concepción',
    bebe: 'El óvulo fecundado viaja al útero.',
    alimentacion: 'Hierro (carnes magras, lentejas) + vitamina C.',
    cuidados: 'No te expongas a calor extremo (saunas, jacuzzis).'
  },
  4: {
    titulo: '🎉 Implantación',
    bebe: 'El embrión se adhiere al útero.',
    alimentacion: 'Comidas ligeras y frecuentes para prevenir náuseas.',
    cuidados: 'Hazte la prueba de embarazo.'
  },
  5: {
    titulo: '💓 Primer Latido',
    bebe: 'Su corazón late, aunque aún no se escucha.',
    alimentacion: 'Snacks suaves (galletas, arroz, plátano).',
    cuidados: 'Programa tu primera cita prenatal.'
  },
  6: {
    titulo: '🥰 Desarrollo Inicial',
    bebe: 'Como una lenteja, ya se forman cerebro y corazón.',
    alimentacion: 'Omega-3 (pescado bajo en mercurio, nueces).',
    cuidados: 'Evita estómago vacío, descansa bastante.'
  },
  7: {
    titulo: '🌱 Crecimiento Rápido',
    bebe: 'Como un arándano, su cerebro se desarrolla mucho.',
    alimentacion: 'Calcio (leche, queso fresco, almendras).',
    cuidados: 'Café con moderación (máx. 1 taza).'
  },
  8: {
    titulo: '🖐 Deditos Formándose',
    bebe: 'Como una frambuesa, brazos y piernas ya se ven.',
    alimentacion: 'Frutas cítricas para absorber hierro.',
    cuidados: 'Usa zapatos cómodos, tu circulación cambia.'
  },
  9: {
    titulo: '🎪 Primeros Movimientos',
    bebe: 'Como una cereza, ya se mueve aunque no lo notes.',
    alimentacion: 'Hierro (espinaca, lentejas) y agua suficiente.',
    cuidados: 'Camina o haz yoga suave.'
  },
  10: {
    titulo: '✨ Ya Tiene Dedos',
    bebe: 'Como una aceituna, se forman deditos.',
    alimentacion: 'Evita alimentos crudos.',
    cuidados: 'Usa ropa cómoda y holgada.'
  },
  11: {
    titulo: '🌀 Se Mueve Más',
    bebe: 'Como un higo, comienza a mover sus extremidades.',
    alimentacion: 'Omega-3 (salmón, semillas de chía).',
    cuidados: 'Hidrata tu piel para prevenir estrías.'
  },
  12: {
    titulo: '🎉 Fin del Primer Trimestre',
    bebe: 'Como una ciruela, tiene órganos principales formados.',
    alimentacion: 'Variedad de frutas, verduras, granos y proteínas.',
    cuidados: 'Primera ecografía importante.'
  },
  13: {
    titulo: '🌈 Más Energía',
    bebe: 'Como una vaina de guisante, se forman cuerdas vocales.',
    alimentacion: 'Frutas ricas en agua (sandía, melón).',
    cuidados: 'Probablemente tengas más energía, aprovecha para caminar.'
  },
  14: {
    titulo: '😍 Más Expresivo',
    bebe: 'Como un limón, hace expresiones faciales.',
    alimentacion: 'Calcio y vitamina D (lácteos, sol moderado).',
    cuidados: 'Usa bloqueador solar, tu piel puede estar sensible.'
  },
  15: {
    titulo: '👂 Escucha Tu Voz',
    bebe: 'Como una manzana, ya percibe sonidos.',
    alimentacion: 'Proteínas en cada comida.',
    cuidados: 'Háblale o ponle música suave.'
  },
  16: {
    titulo: '🦴 Huesos Fuertes',
    bebe: 'Como un aguacate, huesos y músculos se fortalecen.',
    alimentacion: 'Calcio + magnesio (nueces, espinaca).',
    cuidados: 'Puedes empezar a sentir “mariposas” (movimientos).'
  },
  17: {
    titulo: '💤 Duerme y Se Mueve',
    bebe: 'Como una pera, alterna sueño y actividad.',
    alimentacion: 'Hierro (hígado, lentejas) para evitar anemia.',
    cuidados: 'Dormir de lado izquierdo mejora la circulación.'
  },
  18: {
    titulo: '🖐 Primeros Golpecitos',
    bebe: 'Como un pimiento, sus pataditas se sienten.',
    alimentacion: 'Pescado bajo en mercurio.',
    cuidados: 'Segunda ecografía importante.'
  },
  19: {
    titulo: '🌟 Sistema Nervioso',
    bebe: 'Como un mango, desarrolla sistema nervioso.',
    alimentacion: 'Vitamina B (cereales integrales, huevo).',
    cuidados: 'Masajea tu piel con aceites naturales.'
  },
  20: {
    titulo: '🎯 Mitad del Embarazo',
    bebe: 'Como un plátano, mide 25 cm aprox.',
    alimentacion: 'Fibra (avena, frutas) para evitar estreñimiento.',
    cuidados: 'Hazte la ecografía morfológica.'
  },
  21: {
    titulo: '🎶 Escucha Claramente',
    bebe: 'Como una zanahoria, reacciona a sonidos.',
    alimentacion: 'Proteínas y calcio.',
    cuidados: 'Habla o cántale, reconoce tu voz.'
  },
  22: {
    titulo: '😍 Más Parecido a Un Bebé',
    bebe: 'Como una papaya, se define su carita.',
    alimentacion: 'Hierro + vitamina C.',
    cuidados: 'Empieza a usar almohada para dormir más cómoda.'
  },
  23: {
    titulo: '🌬 Pulmones en Práctica',
    bebe: 'Como una berenjena, practica respirar.',
    alimentacion: 'Vitamina D (sol, pescado, huevo).',
    cuidados: 'Puedes notar hinchazón en pies, eleva las piernas.'
  },
  24: {
    titulo: '👀 Abre Los Ojos',
    bebe: 'Como una mazorca, abre los ojos.',
    alimentacion: 'Omega-3 y antioxidantes (frutas rojas).',
    cuidados: 'Vigila presión arterial y glucosa.'
  },
  25: {
    titulo: '💃 Se Mueve Mucho',
    bebe: 'Como un coliflor, responde a tu actividad.',
    alimentacion: 'Lácteos o alternativas vegetales.',
    cuidados: 'Practica respiración y relajación.'
  },
  26: {
    titulo: '🗣 Oído Muy Fino',
    bebe: 'Como una lechuga, oye con claridad.',
    alimentacion: 'Proteínas magras y frutos secos.',
    cuidados: 'Evita estar mucho tiempo de pie.'
  },
  27: {
    titulo: '🌟 Final del Segundo Trimestre',
    bebe: 'Como un pepino, abre y cierra los ojos.',
    alimentacion: 'Comida rica en fibra y agua abundante.',
    cuidados: 'Curso de preparación al parto recomendado.'
  },
  28: {
    titulo: '💕 Última Etapa',
    bebe: 'Como una berenjena grande, ya abre los ojos y sueña.',
    alimentacion: 'Mucha fibra para el estreñimiento.',
    cuidados: 'Control de glucosa (descartar diabetes gestacional).'
  },
  29: {
    titulo: '💪 Más Fuerte',
    bebe: 'Como una calabaza pequeña, músculos y pulmones crecen.',
    alimentacion: 'Proteínas + calcio.',
    cuidados: 'Usa medias de compresión si tienes varices.'
  },
  30: {
    titulo: '🛌 Se Da La Vuelta',
    bebe: 'Como un repollo, puede colocarse cabeza abajo.',
    alimentacion: 'Vitamina C y zinc para defensas.',
    cuidados: 'Descansa con piernas elevadas.'
  },
  31: {
    titulo: '🎶 Reconoce Voces',
    bebe: 'Como un coco, distingue voces y sonidos familiares.',
    alimentacion: 'Pescados bajos en mercurio o semillas ricas en omega-3.',
    cuidados: 'Haz ejercicios de respiración.'
  },
  32: {
    titulo: '🌟 Acumula Grasa',
    bebe: 'Como un melón, acumula grasa bajo la piel.',
    alimentacion: 'Mucha agua y fibra.',
    cuidados: 'Revisa posición del bebé en ecografía.'
  },
  33: {
    titulo: '💤 Sueños Activos',
    bebe: 'Como una piña, sueña y alterna fases de sueño.',
    alimentacion: 'Hierro para evitar anemia.',
    cuidados: 'Prepárate para lactancia (talleres o lecturas).'
  },
  34: {
    titulo: '🤗 Más Espacio Ocupado',
    bebe: 'Como un cantalupo, llena tu abdomen.',
    alimentacion: 'Comidas pequeñas y nutritivas.',
    cuidados: 'Ejercicios de suelo pélvico.'
  },
  35: {
    titulo: '🚼 Preparado Para Nacer',
    bebe: 'Como un durazno grande, pulmones casi listos.',
    alimentacion: 'Proteínas magras, muchas frutas.',
    cuidados: 'Ten lista la maleta del hospital.'
  },
  36: {
    titulo: '🌸 Recta Final',
    bebe: 'Como una sandía pequeña, sigue ganando peso.',
    alimentacion: 'Evita comidas muy pesadas.',
    cuidados: 'Control semanal con tu médico.'
  },
  37: {
    titulo: '🎉 Embarazo a Término',
    bebe: 'Oficialmente listo para nacer, aunque puede esperar.',
    alimentacion: 'Hidratación clave.',
    cuidados: 'Señales de parto: contracciones regulares, pérdida de líquido o tapón mucoso.'
  },
  38: {
    titulo: '🍼 Ansiedad Positiva',
    bebe: 'Sigue ganando peso, como una calabaza grande.',
    alimentacion: 'Comidas fáciles de digerir, sopas y frutas.',
    cuidados: 'Relájate, mantén lista la bolsa.'
  },
  39: {
    titulo: '🚪 A Punto',
    bebe: 'Ya totalmente formado, solo engorda un poquito más.',
    alimentacion: 'Mucha agua y snacks saludables.',
    cuidados: 'Mantente activa con caminatas cortas.'
  },
  40: {
    titulo: '🎊 ¡Bienvenido al Mundo!',
    bebe: '¡El gran día! Puede nacer en cualquier momento.',
    alimentacion: 'Ligera, fácil de digerir (frutas, yogur, avena).',
    cuidados: 'Escucha a tu cuerpo, mantén la calma, sigue indicaciones médicas.'
  }
};
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

import Link from 'next/link';
import MessageIcon from '../../../components/Icons/MessageIcon';
import HospitalIcon from '../../../components/Icons/HospitalIcon';
import MentalHealthIcon from '../../../components/Icons/MentalHealthIcon';

export default function Dashboard() {
  // Hook principal de la página Dashboard
  const handleActualizarFecha = async () => {
    setFechaError("");
    if (!nuevaFecha) return;
    try {
      const res = await fetch("/api/users/set-semana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, fechaUltimaMenstruacion: nuevaFecha })
      });
      const data = await res.json();
      if (res.ok) {
        setFechaUltimaMenstruacion(nuevaFecha);
        setUser(u => ({ ...u, semana: nuevaFecha }));
        localStorage.setItem('gestarUser', JSON.stringify({ ...user, semana: nuevaFecha }));
        setDefiniendoFecha(false);
        setNuevaFecha("");
      } else {
        setFechaError(data.error || "Error al actualizar fecha");
      }
    } catch (e) {
      setFechaError("Error de red o servidor");
    }
  };
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [parejaCode, setParejaCode] = useState("");
  const [vinculando, setVinculando] = useState(false);
  const [vinculaError, setVinculaError] = useState("");
  const [fechaUltimaMenstruacion, setFechaUltimaMenstruacion] = useState(""); // alias local, pero solo usaremos 'semana'
  const [semana, setSemana] = useState("");
  const [definiendoFecha, setDefiniendoFecha] = useState(false);
  const [nuevaFecha, setNuevaFecha] = useState("");
  const [fechaError, setFechaError] = useState("");
  // Calcula la semana actual a partir de la fecha guardada
  useEffect(() => {
    if (!fechaUltimaMenstruacion) return;
    const fecha = new Date(fechaUltimaMenstruacion);
    const hoy = new Date();
    const diff = hoy - fecha;
    const semanaActual = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
    setSemana(semanaActual > 0 ? semanaActual : "");
  }, [fechaUltimaMenstruacion]);

  // Obtiene el consejo de la semana actual
  const consejoSemana = semana && consejosPorSemana[semana] ? consejosPorSemana[semana] : null;
  const [parejaNombre, setParejaNombre] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('gestarUser');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        // Obtener datos frescos del backend
        fetch(`/api/users/get-user?id=${parsedUser.id}`)
          .then(res => res.json())
          .then(freshUser => {
            // Si el backend retorna el usuario completo, úsalo. Si no, usa el local
            const updatedUser = { ...parsedUser, ...freshUser };
            setUser(updatedUser);
            setFechaUltimaMenstruacion(updatedUser.semana || "");
            localStorage.setItem('gestarUser', JSON.stringify(updatedUser));
            setLoading(false);
            // Si tiene pareja, buscar su nombre
            if (updatedUser.id_pareja) {
              fetch(`/api/users/get-nombre?id=${updatedUser.id_pareja}`)
                .then(res => res.json())
                .then(data => {
                  if (data && data.nombres) setParejaNombre(data.nombres);
                });
            }
          })
          .catch(() => {
            setUser(parsedUser);
            setFechaUltimaMenstruacion(parsedUser.semana || "");
            setLoading(false);
          });
      } else {
        alert('No hay una sesión iniciada. Redirigiendo al login.');
        router.push('/login');
      }
    }
  }, [router]);

  const handleVincular = async () => {
    setVinculando(true);
    setVinculaError("");
    try {
      const res = await fetch("/api/users/link-pareja", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, parejaCode })
      });
      const data = await res.json();
      if (res.ok) {
        // Forzar recarga completa para asegurar actualización de datos y localStorage
        window.location.reload();
      } else {
        setVinculaError(data.error || "Error al vincular");
      }
    } catch (e) {
      setVinculaError("Error de red o servidor");
    }
    setVinculando(false);
  };

  if (loading) {
    return <div className={styles.container}><p>Cargando usuario...</p></div>;
  }

  return (
    <div className={styles.container}>
      <UserHeader userName={user.nombres} />
      <main className={styles.main}>
        {!user.id_pareja && (
          <div className={styles.vinculaParejaSection}>
            <h2>Vincula tu pareja</h2>
            <p>Tu código único: <b>{user.id}</b></p>
            <div className={styles.vinculaForm}>
              <input
                type="number"
                placeholder="Código de tu pareja"
                value={parejaCode}
                onChange={e => setParejaCode(e.target.value)}
                className={styles.input}
                disabled={vinculando}
              />
              <button onClick={handleVincular} disabled={vinculando || !parejaCode} className={styles.submitButton}>
                {vinculando ? 'Vinculando...' : 'Vincular'}
              </button>
            </div>
            {vinculaError && <p className={styles.errorText}>{vinculaError}</p>}
          </div>
        )}
  <div className={styles.welcomeSection}>
          <div className={styles.welcomeContent}>
            <h1 className={styles.welcomeTitle}>
              {user.genero === 'masculino' && 'Bienvenido'}
              {user.genero === 'femenino' && 'Bienvenida'}
              {user.genero === 'otro' && 'Bienvenid@'}
              , <span className={styles.nameHighlight}>{user.nombres}</span>!
            </h1>
            {user.id_pareja && parejaNombre && (
              <p className={styles.parejaText}>
                <b>Pareja vinculada:</b> {parejaNombre}
              </p>
            )}
            <p className={styles.welcomeText}>
              {user.rol === 'gestante'
                ? 'Controla y haz seguimiento de tu proceso de embarazo'
                : 'Acompaña a tu pareja en el proceso de embarazo'}
            </p>
          </div>
          <div className={styles.weekBadge}>
            {fechaUltimaMenstruacion ? (
              <>Semana {semana}</>
            ) : user.id_pareja ? (
              <button
                className={styles.definirSemanaBtn}
                onClick={() => setDefiniendoFecha(true)}
              >
                Definir semana actual de embarazo
              </button>
            ) : (
              <span className={styles.infoText}>
                Vincula a tu pareja para definir la semana de embarazo
              </span>
            )}
          </div>
          {definiendoFecha && (
            <div className={styles.definirSemanaModal}>
              <div className={styles.definirSemanaCard}>
                <h3>
                  {user.rol === 'gestante'
                    ? '¿Cuál fue el primer día de tu última menstruación?'
                    : '¿Cuál fue el primer día de la última menstruación de tu pareja?'}
                </h3>
                <input
                  type="date"
                  value={nuevaFecha}
                  onChange={e => setNuevaFecha(e.target.value)}
                  className={styles.input}
                />
                <div style={{ display: 'flex', gap: '1rem', marginTop: 12 }}>
                  <button
                    className={styles.submitButton}
                    onClick={handleActualizarFecha}
                    disabled={!nuevaFecha}
                  >
                    Guardar
                  </button>
                  <button
                    className={styles.cancelButton}
                    onClick={() => { setDefiniendoFecha(false); setNuevaFecha(""); }}
                  >
                    Cancelar
                  </button>
                </div>
                {fechaError && <p className={styles.errorText}>{fechaError}</p>}
              </div>
            </div>
          )}
        </div>

      {consejoSemana && (
        <section className={styles.consejoSection}>
          <h2 className={styles.consejoTitle}>Consejo de la semana</h2>
          <div className={styles.consejoCard}>
            <h3 className={styles.consejoSemana}>{consejoSemana.titulo}</h3>
            <ul className={styles.consejoList}>
              <li><b>👶 Bebé:</b> {consejoSemana.bebe}</li>
              <li><b>🍎 Alimentación:</b> {consejoSemana.alimentacion}</li>
              <li><b>💡 Cuidados:</b> {consejoSemana.cuidados}</li>
            </ul>
          </div>
        </section>
      )}



        {/* Card Carousel for App Sections */}
        <section className={styles.cardCarouselSection}>
          <h2 className={styles.cardCarouselTitle}>Explora las secciones principales</h2>
          <div className={styles.cardCarouselContainer}>
            <div className={styles.cardCarousel}>
              <Link href="/foro" className={styles.cardLink}>
                <div className={styles.cardCarouselCard}>
                  <div className={styles.cardIcon}><MessageIcon color="#E8B4B8" size={40} /></div>
                  <h3 className={styles.cardCarouselCardTitle}>Foro</h3>
                  <p className={styles.cardCarouselCardDesc}>Comparte dudas, experiencias y recibe apoyo de la comunidad y expertos.</p>
                </div>
              </Link>
              <Link href="/hospitales" className={styles.cardLink}>
                <div className={styles.cardCarouselCard}>
                  <div className={styles.cardIcon}><HospitalIcon color="#E8B4B8" size={40} /></div>
                  <h3 className={styles.cardCarouselCardTitle}>Mapa de Hospitales</h3>
                  <p className={styles.cardCarouselCardDesc}>Encuentra hospitales y centros de salud cercanos con información real y actualizada.</p>
                </div>
              </Link>
              <Link href="/apoyo-psicologico" className={styles.cardLink}>
                <div className={styles.cardCarouselCard}>
                  <div className={styles.cardIcon}><MentalHealthIcon color="#E8B4B8" size={40} /></div>
                  <h3 className={styles.cardCarouselCardTitle}>Apoyo Psicológico</h3>
                  <p className={styles.cardCarouselCardDesc}>Accede a recursos y orientación profesional para tu bienestar emocional.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
