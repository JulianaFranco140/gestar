"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('gestarUser');
      if (user) {
        router.push('/dashboard');
      }
    }
  }, [router]);

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
          <Link href="/signup">
            <button className={styles.button}>
              Regístrate
            </button>
          </Link>
          <Link href="/login">
            <button className={styles.button}>
              Inicia sesión
            </button>
          </Link>
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
        </div>
        <div className={styles.cardsSection}>
          <p className={styles.subtitle}>
            Diseñado para ambos roles.
          </p>
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
        </div>
      </main>
    </div>
  );
}