
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

export default function ForoTemas() {
  const [temas, setTemas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [publicando, setPublicando] = useState(false);
  const [error, setError] = useState('');
  const [respuestaIA, setRespuestaIA] = useState(false);
  
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const interestTopics = {
    lactancia: {
      title: "Lactancia materna",
      subtitle: "Consejos y experiencias",
      content: {
        intro: "La lactancia materna es uno de los regalos más valiosos que puedes dar a tu bebé. Proporciona todos los nutrientes necesarios y fortalece el vínculo único entre madre e hijo.",
        benefits: [
          "Fortalece el sistema inmunológico del bebé",
          "Reduce el riesgo de infecciones y alergias",
          "Favorece el desarrollo cognitivo",
          "Ayuda a la recuperación posparto de la madre",
          "Reduce el riesgo de cáncer de mama y ovarios"
        ],
        tips: [
          "Busca una posición cómoda para ti y tu bebé",
          "Asegúrate de que el bebé agarre bien el pezón",
          "Amamanta con frecuencia, especialmente al inicio",
          "Mantente hidratada y come nutritivamente",
          "No dudes en pedir ayuda profesional si tienes dificultades"
        ],
        resources: [
          "Liga de la Leche Internacional - Colombia",
          "Consulta con especialistas en lactancia",
          "Grupos de apoyo para madres lactantes"
        ]
      }
    },
    desarrollo: {
      title: "Desarrollo del bebé",
      subtitle: "Etapas y cuidados",
      content: {
        intro: "Cada bebé se desarrolla a su propio ritmo, pero conocer las etapas generales te ayudará a entender y apoyar mejor su crecimiento.",
        stages: [
          {
            period: "0-3 meses",
            milestones: ["Sonrisa social", "Seguimiento visual", "Control de cabeza"]
          },
          {
            period: "4-6 meses",
            milestones: ["Rodar", "Sentarse con apoyo", "Balbuceo"]
          },
          {
            period: "7-12 meses",
            milestones: ["Gatear", "Primeras palabras", "Caminar con apoyo"]
          }
        ],
        care: [
          "Control médico regular",
          "Estimulación temprana apropiada",
          "Alimentación adecuada según la edad",
          "Ambiente seguro y estimulante",
          "Mucho amor y paciencia"
        ],
        warning: "Consulta con tu pediatra si notas retrasos significativos en el desarrollo."
      }
    },
    ejercicio: {
      title: "Ejercicio prenatal",
      subtitle: "Rutinas seguras",
      content: {
        intro: "El ejercicio durante el embarazo tiene múltiples beneficios tanto para la madre como para el bebé, siempre que se practique de forma segura.",
        benefits: [
          "Mejora la circulación sanguínea",
          "Reduce dolores de espalda",
          "Ayuda a controlar el peso",
          "Mejora el estado de ánimo",
          "Facilita el trabajo de parto"
        ],
        safe_exercises: [
          "Caminar - ideal para todas las etapas",
          "Natación - ejercicio de bajo impacto",
          "Yoga prenatal - flexibilidad y relajación",
          "Ejercicios de Kegel - fortalecen el suelo pélvico",
          "Estiramientos suaves"
        ],
        precautions: [
          "Consulta siempre con tu médico antes de comenzar",
          "Evita ejercicios de alto impacto",
          "No hagas ejercicio si tienes complicaciones",
          "Mantente hidratada",
          "Escucha a tu cuerpo y detente si sientes dolor"
        ],
        contraindications: "Embarazo de alto riesgo, sangrado, problemas de placenta, entre otros."
      }
    }
  };

  function openInterestModal(topicKey) {
    setSelectedTopic(interestTopics[topicKey]);
    setShowInterestModal(true);
  }

  function generarSlug(texto) {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  async function publicarTema() {
    if (!titulo.trim() || !contenido.trim()) {
      setError('Debes ingresar título y contenido.');
      return;
    }
    setPublicando(true);
    setError('');
    const slug = generarSlug(titulo);
    try {
      const res = await fetch('/api/foro/tema', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titulo,
          contenido,
          slug,
          user_id: user?.id,
          generar_respuesta_ia: respuestaIA,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al publicar');
      setShowModal(false);
      setTitulo('');
      setContenido('');
      setRespuestaIA(false);
      setError('');
      window.location.reload();
    } catch (e) {
      setError(e.message);
    }
    setPublicando(false);
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('gestarUser');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        fetch(`/api/users/get-user?id=${parsedUser.id}`)
          .then(res => res.json())
          .then(freshUser => {
            const updatedUser = { ...parsedUser, ...freshUser };
            setUser(updatedUser);
            localStorage.setItem('gestarUser', JSON.stringify(updatedUser));
          })
          .catch(() => {
            setUser(parsedUser);
          });
      }
    }
    async function fetchTemas() {
      setLoading(true);
      try {
        const res = await fetch('/api/foro/temas');
        const data = await res.json();
        setTemas(data.temas || []);
      } catch (e) {
        setTemas([]);
      }
      setLoading(false);
    }
    fetchTemas();
  }, []);

  return (
    <div className={styles.container}>
      <UserHeader userName={user?.nombres || ''} />
      <main className={styles.main}>
        <div className={styles.forumContainer}>
          <div className={styles.headerSection}>
            <h1 className={styles.forumTitle}>Foro de la comunidad</h1>
            <button
              className={styles.nuevoTemaBtn}
              onClick={() => setShowModal(true)}
            >
              Publicar nuevo tema
            </button>
          </div>
          <div className={styles.contentLayout}>
            <div className={styles.leftSidebar}>
              <div className={styles.interestSection}>
                <h3 className={styles.interestTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#E8B4B8" stroke="#E8B4B8" strokeWidth="1"/>
                  </svg>
                  Temas de Interés
                </h3>
                <div className={styles.interestList}>
                  <div className={styles.interestItem} onClick={() => openInterestModal('lactancia')}>
                    <div className={styles.interestIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 9.5 11 12 11C14.5 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" fill="#E8B4B8"/>
                        <path d="M12 13C8 13 5 15.5 5 18.5V22H19V18.5C19 15.5 16 13 12 13Z" fill="#E8B4B8"/>
                        <ellipse cx="12" cy="16" rx="3" ry="2" fill="#FFF"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Lactancia materna</h4>
                      <p>Consejos y experiencias</p>
                    </div>
                  </div>
                  <div className={styles.interestItem} onClick={() => openInterestModal('desarrollo')}>
                    <div className={styles.interestIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="6" fill="#E8B4B8"/>
                        <circle cx="10" cy="6.5" r="1" fill="#333"/>
                        <circle cx="14" cy="6.5" r="1" fill="#333"/>
                        <path d="M10 9C10.5 9.5 11.2 10 12 10C12.8 10 13.5 9.5 14 9" stroke="#333" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M12 14C8 14 6 16 6 18V22H18V18C18 16 16 14 12 14Z" fill="#F8BBD9"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Desarrollo del bebé</h4>
                      <p>Etapas y cuidados</p>
                    </div>
                  </div>
                  <div className={styles.interestItem} onClick={() => openInterestModal('ejercicio')}>
                    <div className={styles.interestIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 14L6 17L9 20M15 14L18 17L15 20" stroke="#E8B4B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="8" r="6" fill="#E8B4B8"/>
                        <path d="M10 6C10.5 5.5 11.2 5 12 5C12.8 5 13.5 5.5 14 6" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="10.5" cy="7" r="0.5" fill="#FFF"/>
                        <circle cx="13.5" cy="7" r="0.5" fill="#FFF"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Ejercicio prenatal</h4>
                      <p>Rutinas seguras</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.newsSection}>
                <h3 className={styles.newsTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" fill="#E8B4B8" stroke="#E8B4B8" strokeWidth="1"/>
                    <rect x="6" y="7" width="8" height="2" fill="#FFF"/>
                    <rect x="6" y="10" width="12" height="1" fill="#FFF"/>
                    <rect x="6" y="12" width="10" height="1" fill="#FFF"/>
                    <rect x="6" y="14" width="6" height="1" fill="#FFF"/>
                    <circle cx="18" cy="16" r="1.5" fill="#FFF"/>
                  </svg>
                  Noticias
                </h3>
                <div className={styles.newsList}>
                  <Link href="https://www.elespectador.com/cromos/maternidad/como-volver-al-trabajo-despues-de-tener-un-bebe-esto-aconsejan-los-expertos/" target="_blank" rel="noopener noreferrer" className={styles.newsLink}>
                    <div className={styles.newsItem}>
                      <span className={styles.newsDate}>El Espectador</span>
                      <p>¿Cómo volver al trabajo después de tener un bebé?</p>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.externalIcon}>
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                  <Link href="https://www.elespectador.com/cromos/maternidad/como-cuidar-el-sistema-inmune-de-un-nino/" target="_blank" rel="noopener noreferrer" className={styles.newsLink}>
                    <div className={styles.newsItem}>
                      <span className={styles.newsDate}>El Espectador</span>
                      <p>¿Cómo cuidar el sistema inmune de un niño?
</p>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.externalIcon}>
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                  <Link href="https://www.natalben.com/noticias/embarazadas-comen-mal-ejercicio-fisico" target="_blank" rel="noopener noreferrer" className={styles.newsLink}>
                    <div className={styles.newsItem}>
                      <span className={styles.newsDate}>Natalben</span>
                      <p>Hábitos sanos de las embarazadas</p>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.externalIcon}>
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className={styles.mainContent}>
              <div className={styles.temasSection}>
            <h2 className={styles.temasTitle}>Temas recientes</h2>
            {loading ? (
              <div className={styles.loading}>Cargando temas...</div>
            ) : temas.length === 0 ? (
              <div className={styles.noTemas}>No hay temas aún. ¡Sé la primera en publicar!</div>
            ) : (
              <ul className={styles.temasList}>
                {temas.map((tema) => (
                  <li key={tema.id} className={styles.temaItem}>
                    <Link href={`/foro/${tema.slug}`} className={styles.temaLink}>
                      <div className={styles.temaTitulo}>{tema.titulo}</div>
                      <div className={styles.temaMeta}>
                        <span className={styles.temaAutor}>Por {tema.autor}</span>
                        <span className={styles.temaFecha}>{tema.fecha}</span>
                        <span className={styles.temaLikes} title="Likes">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="var(--primary-pink)" strokeWidth="2" fill="#fff"/>
                          </svg>
                          {tema.likes}
                        </span>
                        {user?.id && tema.user_id === user.id && (
                          <button
                            className={styles.eliminarBtn}
                            title="Eliminar tema"
                            onClick={e => {
                              e.preventDefault();
                              if (window.confirm('¿Estás seguro de que quieres eliminar este tema? Esta acción no se puede deshacer.')) {
                                fetch(`/api/foro/tema?id=${tema.id}`, { method: 'DELETE' })
                                  .then(res => res.ok ? window.location.reload() : alert('Error al eliminar tema'));
                              }
                            }}
                          >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22" style={{verticalAlign: 'middle'}}>
                              <path d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M14 11V17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M10 11V17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </button>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
        </div>
        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h2 className={styles.temasTitle}>Publicar nuevo tema</h2>
              <label className={styles.modalLabel}>
                Título
                <input
                  type="text"
                  value={titulo}
                  onChange={e => setTitulo(e.target.value)}
                  className={styles.modalInput}
                  maxLength={255}
                  disabled={publicando}
                />
              </label>
              <label className={styles.modalLabel}>
                Contenido
                <textarea
                  value={contenido}
                  onChange={e => setContenido(e.target.value)}
                  className={styles.modalTextarea}
                  rows={6}
                  disabled={publicando}
                />
              </label>
              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={respuestaIA}
                    onChange={e => setRespuestaIA(e.target.checked)}
                    disabled={publicando}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>
                    ¿Deseas recibir una respuesta generada por IA?
                  </span>
                </label>
              </div>
              {error && <div className={styles.modalError}>{error}</div>}
              <div className={styles.modalActions}>
                <button
                  className={styles.publicarBtn}
                  onClick={publicarTema}
                  disabled={publicando}
                >
                  {publicando ? 'Publicando...' : 'Publicar'}
                </button>
                <button
                  className={styles.cancelarBtn}
                  onClick={() => { setShowModal(false); setTitulo(''); setContenido(''); setError(''); }}
                  disabled={publicando}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Modal de Temas de Interés */}
        {showInterestModal && selectedTopic && (
          <div className={styles.modalOverlay}>
            <div className={styles.interestModalContent}>
              <div className={styles.interestModalHeader}>
                <h2>{selectedTopic.title}</h2>
                <button
                  className={styles.closeButton}
                  onClick={() => setShowInterestModal(false)}
                >
                  ×
                </button>
              </div>
              
              <div className={styles.interestModalBody}>
                <p className={styles.topicSubtitle}>{selectedTopic.subtitle}</p>
                <p className={styles.topicIntro}>{selectedTopic.content.intro}</p>
                
                {/* Lactancia */}
                {selectedTopic.title === "Lactancia materna" && (
                  <>
                    <div className={styles.topicSection}>
                      <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#E8B4B8"/>
                        </svg>
                        Beneficios de la lactancia materna
                      </h3>
                      <ul>
                        {selectedTopic.content.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.topicSection}>
                      <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                          <circle cx="12" cy="12" r="10" fill="#E8B4B8"/>
                          <path d="M12 6V18M6 12H18" stroke="#FFF" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        Consejos prácticos
                      </h3>
                      <ul>
                        {selectedTopic.content.tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.topicSection}>
                      <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                          <path d="M16 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4H8" stroke="#E8B4B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="#E8B4B8" strokeWidth="2" fill="#E8B4B8"/>
                          <path d="M9 12H15" stroke="#E8B4B8" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M9 16H15" stroke="#E8B4B8" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Recursos de apoyo
                      </h3>
                      <ul>
                        {selectedTopic.content.resources.map((resource, index) => (
                          <li key={index}>{resource}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
                
                {/* Desarrollo del bebé */}
                {selectedTopic.title === "Desarrollo del bebé" && (
                  <>
                    <div className={styles.topicSection}>
                      <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                          <rect x="3" y="4" width="18" height="16" rx="2" fill="#E8B4B8"/>
                          <rect x="7" y="7" width="2" height="2" fill="#FFF"/>
                          <rect x="11" y="7" width="2" height="2" fill="#FFF"/>
                          <rect x="15" y="7" width="2" height="2" fill="#FFF"/>
                          <rect x="7" y="11" width="2" height="2" fill="#FFF"/>
                          <rect x="11" y="11" width="2" height="2" fill="#FFF"/>
                          <rect x="15" y="11" width="2" height="2" fill="#FFF"/>
                          <rect x="7" y="15" width="2" height="2" fill="#FFF"/>
                          <rect x="11" y="15" width="2" height="2" fill="#FFF"/>
                          <rect x="15" y="15" width="2" height="2" fill="#FFF"/>
                        </svg>
                        Etapas del desarrollo
                      </h3>
                      {selectedTopic.content.stages.map((stage, index) => (
                        <div key={index} className={styles.developmentStage}>
                          <h4>{stage.period}</h4>
                          <ul>
                            {stage.milestones.map((milestone, idx) => (
                              <li key={idx}>{milestone}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    <div className={styles.topicSection}>
                      <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                          <path d="M22 11.08V12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C13.18 2 14.29 2.25 15.31 2.69" stroke="#E8B4B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="#E8B4B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Cuidados importantes
                      </h3>
                      <ul>
                        {selectedTopic.content.care.map((care, index) => (
                          <li key={index}>{care}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.warningBox}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                        <path d="M12 2L22 20H2L12 2Z" fill="#FFA726"/>
                        <path d="M12 9V13" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="17" r="1" fill="#FFF"/>
                      </svg>
                      <strong>Importante:</strong> {selectedTopic.content.warning}
                    </div>
                  </>
                )}
                
                {/* Ejercicio prenatal */}
                {selectedTopic.title === "Ejercicio prenatal" && (
                  <>
                    <div className={styles.topicSection}>
                      <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                          <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" fill="#E8B4B8"/>
                          <polyline points="9,9 9,15" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                          <polyline points="15,9 15,15" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="9" cy="6.5" r="1" fill="#FFF"/>
                          <circle cx="15" cy="6.5" r="1" fill="#FFF"/>
                        </svg>
                        Beneficios del ejercicio
                      </h3>
                      <ul>
                        {selectedTopic.content.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.topicSection}>
                      <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                          <path d="M22 11.08V12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C13.18 2 14.29 2.25 15.31 2.69" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Ejercicios seguros
                      </h3>
                      <ul>
                        {selectedTopic.content.safe_exercises.map((exercise, index) => (
                          <li key={index}>{exercise}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.topicSection}>
                      <h3>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                          <path d="M12 2L22 20H2L12 2Z" fill="#FFA726"/>
                          <path d="M12 9V13" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="12" cy="17" r="1" fill="#FFF"/>
                        </svg>
                        Precauciones
                      </h3>
                      <ul>
                        {selectedTopic.content.precautions.map((precaution, index) => (
                          <li key={index}>{precaution}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.warningBox}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '8px'}}>
                        <circle cx="12" cy="12" r="10" fill="#F44336"/>
                        <line x1="15" y1="9" x2="9" y2="15" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="9" y1="9" x2="15" y2="15" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <strong>Contraindicaciones:</strong> {selectedTopic.content.contraindications}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
