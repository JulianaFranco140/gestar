
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

export default function ForoTemas() {
  const [temas, setTemas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('gestarUser');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        // Obtener datos frescos del backend
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
          <h1 className={styles.forumTitle}>Foro de la comunidad</h1>
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
                        <span className={styles.temaLikes} title="Likes">❤️ {tema.likes}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
