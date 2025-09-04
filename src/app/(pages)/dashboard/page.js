'use client';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

export default function Dashboard() {
  const userName = "Juliana"; 

  return (
    <div className={styles.container}>
      <UserHeader userName={userName} />
      
      <main className={styles.main}>
        <div className={styles.welcomeSection}>
          <div className={styles.welcomeContent}>
            <h1 className={styles.welcomeTitle}>
              ¡Hola <span className={styles.nameHighlight}>{userName}</span>!
            </h1>
            <p className={styles.welcomeText}>
              Bienvenida a tu espacio personal de embarazo
            </p>
          </div>
          <div className={styles.weekBadge}>
            Semana 11
          </div>
        </div>

        <div className={styles.carouselSection}>
          <div className={styles.carouselContainer}>
            <button className={styles.carouselArrow + ' ' + styles.arrowLeft}>
              ‹
            </button>
            
            <div className={styles.carouselContent}>
              <div className={styles.carouselSlide}>
              </div>
            </div>
            
            <button className={styles.carouselArrow + ' ' + styles.arrowRight}>
              ›
            </button>
          </div>
        </div>

        <div className={styles.cardsSection}>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Comunidad</h3>
                <p className={styles.cardDescription}>
                  Conecta con otras mamás
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Nuevos exámenes</h3>
                <p className={styles.cardDescription}>
                  Sube tus últimos resultados
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
