'use client';
import { useState, useEffect } from 'react';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

export default function ApoyoPsicologico() {
  const [user, setUser] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos');

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
  }, []);

  const allResources = [
    {
      id: 1,
      type: 'Libros',
      title: 'Psicología perinatal en entornos de salud',
      author: 'María de la Fe Rodríguez Muñoz & Rafael A. Caparros-Gonzalez',
      description: 'Manual basado en evidencia que cubre ansiedad durante embarazo y posparto, depresión, prevención, herramientas de detección, estrés, etc. Muy adecuado para profesionales pero también útil para madres que quieren entender lo que sienten.',
      pages: '408 páginas',
      buttonText: 'Buscar Libro',
      url: 'https://www.edicionespiramide.es/libro/psicologia/psicologia-perinatal-en-entornos-de-salud-maria-de-la-fe-rodriguez-munoz-9788436846386/'
    },
    {
      id: 2,
      type: 'Videos',
      title: 'Meditación para reducir el miedo en el embarazo',
      description: 'Meditación guiada para soltar miedos, calmar la mente, enfocar en la tranquilidad. Ideal para embarazadas que enfrentan ansiedad o temores sobre el parto.',
      pages: '8:45 min',
      buttonText: 'Ver Video',
      url: 'https://www.youtube.com/watch?v=l24pvTNgFKQ'
    },
    {
      id: 3,
      type: 'Libros',
      title: 'Usted no está solo',
      author: 'Una antología de historias de salud mental perinatal',
      description: 'Colección de historias reales de personas que vivieron trastornos mentales durante la perinatalidad (incluyendo emociones de tristeza, ansiedad, pensamientos intrusivos); ayuda a sentirse menos sola.',
      pages: '320 páginas',
      buttonText: 'Buscar Libro',
      url: 'https://cappa.net/es/2023/10/05/book-review-of-you-are-not-alone-an-anthology-of-perinatal-mental-health-stories/'
    },
    {
      id: 4,
      type: 'Audio',
      title: 'El miedo en el embarazo',
      author: 'Podcast La Revolución Madre',
      description: 'Episodios semanales donde madres reales comparten sus experiencias, miedos y triunfos',
      pages: '35-40 min/ep',
      buttonText: 'Escuchar',
      url: 'https://creators.spotify.com/pod/profile/revolucin-madre5/episodes/1x05-El-miedo-en-el-embarazo-e2khbuo'
    },
    {
      id: 5,
      type: 'PDFs',
      title: 'Salud mental perinatal',
      author: 'JM Maldonado-Durán',
      description: 'Texto amplio que describe los trastornos de ansiedad, fobias, pánico puerperal, etc., durante embarazo y posparto.',
      pages: '285 páginas',
      buttonText: 'Leer PDF',
      url: 'https://iris.paho.org/bitstream/handle/10665.2/51594/9789275332498_spa.pdf?sequence='
    },
    {
      id: 6,
      type: 'Videos',
      title: 'Salud mental y embarazo',
      author: 'ACOG',
      description: 'Video informativo sobre cómo los cambios emocionales en embarazo son comunes, cómo reconocer síntomas de ansiedad o depresión, cuándo buscar ayuda.',
      pages: '4:31 min',
      buttonText: 'Ver Video',
      url: 'https://www.youtube.com/watch?v=ETgAvfedTAc'
    },
    {
      id: 7,
      type: 'Libros',
      title: 'La maternidad y la salud mental perinatal: Temores, dudas e ilusiones ',
      author: 'Gracia Lasheras, Jorge Osma, Carolina Palomar Pérez',
      description: 'Explora los miedos, ilusiones, dudas que emergen en el proceso de la maternidad, embarazo, desafíos emocionales comunes. Buen apoyo emocional.',
      pages: '162 páginas',
      buttonText: 'Buscar Libro',
      url: 'https://www.amazon.com/-/es/maternidad-salud-mental-perinatal-ilusiones/dp/841855648X'
    },
    {
      id: 8,
      type: 'Audio',
      title: 'Hipnoparto: Preparación para un parto positivo.',
      author: 'Miss Carmen Moreno',
      description: 'El hipnoparto o hypnobirthing cambia tu percepción del parto a través de información, herramientas para trabajar en tus creencias y ejercicios prácticos. En el audiolibro encontrarás 19 ejercicios prácticos, 35 secciones informativas basadas en evidencia científica y un audio de meditación guiada descargable en la web de Parto Positivo.',
      pages: '255 min',
      buttonText: 'Escuchar',
      url: 'https://www.audible.com/es_US/pd/Hipnoparto-Preparacion-Para-Un-Parto-Positivo-Hypnobirthing-Preparing-for-a-Positive-Birth-Audiolibro/B09912X1HQ?ref=a_blog_t1_asinslist_abtest_c&source_code=BLGORWS0107160001'
    },

    {
        id: 9,
        type: 'Videos',
        title: 'El embarazo y la salud mental',
        description: 'Reflexiona sobre la importancia de expresar lo que se siente, apoyo social, compartir emociones. Puede dar alivio al reconocer que uno no está sola.',
        pages: '1:40 min',
        buttonText: 'Ver Video',
        url: 'https://www.youtube.com/watch?v=EzJMSdsN_tY'
    },
    {
        id: 10,
        type: 'Videos',
        title: 'Navegando la esperanza y el miedo',
        description: 'Se habla de cómo lidiar con miedo y ansiedad durante embarazo, parto y posparto, construyendo esperanza.',
        pages: '6:55 min',
        buttonText: 'Ver Video',
        url: 'https://mychoicesinchildbirth.org/es/films/navigating-hope-and-fear/'
    },
    {
        id: 11,
        type: 'PDFs',
        title: 'Guía de salud psicológica en el embarazo y posparto',
        author: 'AFDA',
        description: 'Guía reciente que aborda ansiedad, estrés, depresión — identificación, estrategias de apoyo, cómo marcar un plan para manejar emociones.',
        pages: '20 páginas',
        buttonText: 'Leer PDF',
        url: 'https://asociacionafda.com/wp-content/uploads/2024/11/guia-de-salud-psicologica-en-el-embarazo-y-posparto.pdf'
    },
    {
      id: 12,
      type: 'PDFs',
      title: 'Kit de herramientas para la salud mental materna',
      description: 'Manual práctico con herramientas para la ansiedad, estrés durante el embarazo, prevención de enfermedad mental posparto.',
      pages: '78 páginas',
      buttonText: 'Leer PDF',
      url: 'https://mihp.utah.gov/wp-content/uploads/Maternal-Mental-Health-Toolkit-v3.1-WEB-es.pdf'
    }
  ];


  const handleResourceClick = (resource) => {
    if (resource && resource.url) {
      window.open(resource.url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Recurso no disponible temporalmente');
    }
  };


  const filteredResources = activeFilter === 'Todos' 
    ? allResources 
    : allResources.filter(resource => {
        if (activeFilter === 'PDFs') return resource.type === 'PDFs';
        if (activeFilter === 'Videos') return resource.type === 'Videos';
        if (activeFilter === 'Libros') return resource.type === 'Libros';
        if (activeFilter === 'Audio') return resource.type === 'Audio';
        return resource.type === activeFilter;
      });

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const getResourceTypeClass = (type) => {
    switch(type) {
      case 'PDFs': return styles.pdfType;
      case 'Videos': return styles.videoType;
      case 'Libros': return styles.bookType;
      case 'Audio': return styles.audioType;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      <UserHeader userName={user?.nombres || "Usuario"} />
      
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.iconTitle}>
              <h1 className={styles.mainTitle}>Apoyo Psicológico y Bienestar Mental</h1>
            </div>
            <p className={styles.subtitle}>Tu salud mental es tan importante como tu salud física</p>
            <p className={styles.quote}>&ldquo;Un embarazo saludable incluye cuidar tanto tu cuerpo como tu mente&rdquo;</p>
          </div>
        </div>

        <div className={styles.emergencySection}>
          <div className={styles.emergencyHeader}>
            <h2 className={styles.emergencyTitle}>¿Necesitas Ayuda Inmediata?</h2>
          </div>
          
          <div className={styles.helpOptions}>
            <div className={styles.helpCard}>
  <div className={styles.helpIcon}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59524 1.99522 8.06607 2.16708 8.43513 2.48353C8.80418 2.79999 9.04644 3.23945 9.10999 3.72C9.22832 4.68007 9.47138 5.62273 9.82999 6.53C9.94454 6.88792 9.9613 7.27691 9.86803 7.64382C9.77476 8.01074 9.57504 8.34252 9.28999 8.59L8.08999 9.79C9.51355 12.4135 11.5865 14.4864 14.21 15.91L15.41 14.71C15.6575 14.4249 15.9893 14.2252 16.3562 14.132C16.7231 14.0387 17.1121 14.0555 17.47 14.17C18.3773 14.5286 19.3199 14.7717 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#f8bbd9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
  <h3 className={styles.helpNumber}>+57 1 323-2425</h3>
  <p className={styles.helpDescription}>Línea Nacional de Salud Mental (Colombia)</p>
</div>
            
            <div className={styles.helpCard}>
              <div className={styles.helpIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"  stroke="#f8bbd9" strokeWidth="1.5"/>
                  <path d="M8 10h8M8 14h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className={styles.helpNumber}>WhatsApp</h3>
              <p className={styles.helpDescription}>Chat de Crisis: +57 300-754-8933</p>
            </div>
            
            
          </div>
        </div>


        <div className={styles.quickHelpSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ayuda Rápida</h2>
          </div>
          
          <div className={styles.emotionCards}>
            <div className={styles.emotionCard}>
              <h3 className={styles.emotionTitle}>Ansiedad</h3>
              <p className={styles.emotionDescription}>Técnicas inmediatas para calmar la ansiedad</p>
            </div>
            
            <div className={styles.emotionCard}>
              <h3 className={styles.emotionTitle}>Tristeza</h3>
              <p className={styles.emotionDescription}>Apoyo para momentos de tristeza profunda</p>
            </div>
            
            <div className={styles.emotionCard}>
              <h3 className={styles.emotionTitle}>Miedos</h3>
              <p className={styles.emotionDescription}>Manejo de miedos sobre el parto y maternidad</p>
            </div>
            
            <div className={styles.emotionCard}>
              <h3 className={styles.emotionTitle}>Estrés</h3>
              <p className={styles.emotionDescription}>Técnicas de relajación y manejo del estrés</p>
            </div>
          </div>
        </div>


        <div className={styles.librarySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Biblioteca de Recursos</h2>
          </div>
          
          <div className={styles.filterTabs}>
            <button 
              className={`${styles.filterTab} ${activeFilter === 'Todos' ? styles.active : ''}`}
              onClick={() => handleFilterClick('Todos')}
            >
              Todos
            </button>
            <button 
              className={`${styles.filterTab} ${activeFilter === 'PDFs' ? styles.active : ''}`}
              onClick={() => handleFilterClick('PDFs')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#6B7C85" stroke="#374151" strokeWidth="1"/>
                <path d="M14 2v6h6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 13h8M8 17h8M8 9h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              PDFs
            </button>
            <button 
              className={`${styles.filterTab} ${activeFilter === 'Videos' ? styles.active : ''}`}
              onClick={() => handleFilterClick('Videos')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="14" rx="2" fill="#6B7C85" stroke="#374151" strokeWidth="1"/>
                <path d="M10 8.5l4 2.5-4 2.5v-5z" fill="white"/>
              </svg>
              Videos
            </button>
            <button 
              className={`${styles.filterTab} ${activeFilter === 'Libros' ? styles.active : ''}`}
              onClick={() => handleFilterClick('Libros')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#6B7C85" stroke="#374151" strokeWidth="1"/>
                <path d="M8 7h8M8 11h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Libros
            </button>
            <button 
              className={`${styles.filterTab} ${activeFilter === 'Audio' ? styles.active : ''}`}
              onClick={() => handleFilterClick('Audio')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" fill="#6B7C85"/>
                <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" fill="#374151"/>
              </svg>
              Audio
            </button>
          </div>

          <div className={styles.resourceGrid}>
            {filteredResources.map((resource) => (
              <div key={resource.id} className={styles.resourceCard}>
                <div className={`${styles.resourceType} ${getResourceTypeClass(resource.type)}`}>
                  {resource.type}
                </div>
                
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceAuthor}>{resource.author}</p>
                <p className={styles.resourceDescription}>
                  {resource.description}
                </p>
                <div className={styles.resourceFooter}>
                  <button 
                    className={styles.resourceButton}
                    onClick={() => handleResourceClick(resource)}
                  >
                    {resource.buttonText}
                  </button>
                  <span className={styles.favoriteIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#FF69B4" strokeWidth="1"/>
                    </svg>
                  </span>
                  <span className={styles.resourcePages}>{resource.pages}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}