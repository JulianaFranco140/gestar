'use client';
import { useState } from 'react';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

export default function ApoyoPsicologico() {
  const userName = "Juliana";
  const [activeFilter, setActiveFilter] = useState('Todos');

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
      <UserHeader userName={userName} />
      
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.iconTitle}>
              <h1 className={styles.mainTitle}>Apoyo Psicológico y Bienestar Mental</h1>
            </div>
            <p className={styles.subtitle}>Tu salud mental es tan importante como tu salud física</p>
            <p className={styles.quote}>"Un embarazo saludable incluye cuidar tanto tu cuerpo como tu mente"</p>
          </div>
        </div>

        <div className={styles.emergencySection}>
          <div className={styles.emergencyHeader}>
            <h2 className={styles.emergencyTitle}>¿Necesitas Ayuda Inmediata?</h2>
          </div>
          
          <div className={styles.helpOptions}>
            <div className={styles.helpCard}>
              <div className={styles.helpIcon}>📞</div>
              <h3 className={styles.helpNumber}>+57 1 323-2425</h3>
              <p className={styles.helpDescription}>Línea Nacional de Salud Mental (Colombia)</p>
            </div>
            
            <div className={styles.helpCard}>
              <div className={styles.helpIcon}>📱</div>
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
              📄 PDFs
            </button>
            <button 
              className={`${styles.filterTab} ${activeFilter === 'Videos' ? styles.active : ''}`}
              onClick={() => handleFilterClick('Videos')}
            >
              🎬 Videos
            </button>
            <button 
              className={`${styles.filterTab} ${activeFilter === 'Libros' ? styles.active : ''}`}
              onClick={() => handleFilterClick('Libros')}
            >
              📖 Libros
            </button>
            <button 
              className={`${styles.filterTab} ${activeFilter === 'Audio' ? styles.active : ''}`}
              onClick={() => handleFilterClick('Audio')}
            >
              🎧 Audio
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
                  <span className={styles.favoriteIcon}>❤️</span>
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