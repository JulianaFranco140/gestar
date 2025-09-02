import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
  
    <div className={styles.container}>
      <header className={styles.header}>
        
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="GeStar Logo"
            width={160}
            height={60}
          />
        </div>
        <div className={styles.headerButtons}>
          <button className={styles.registerButton}>
            Regístrate
          </button>
          <button className={styles.loginButton}>
            Inicia sesión
          </button>
        </div>
      </header>


      <main className={styles.main}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>
            Tu embarazo <span className={styles.titleHighlight}>conectado</span><br />
            y <span className={styles.titleHighlight}>cuidado</span>.
          </h1>
          <p className={styles.description}>
            La plataforma integral que acompaña cada momento de tu gestación con tecnología, cuidado médico y tranquilidad de inicio.
          </p>
          
          <p className={styles.subtitle}>
            Diseñado para ambos roles.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Para gestante:
            </h3>
            <p className={styles.cardDescription}>
              Un espacio personal con todo lo necesario para cuidar tu bienestar y salud durante el embarazo.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Para acompañante:
            </h3>
            <p className={styles.cardDescription}>
              Herramientas y recursos para brindar el mejor apoyo durante todo el proceso del embarazo.
            </p>
          </div>
        </div>
      </main>

 
      </div>

  );
}
