
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
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al publicar');
      setShowModal(false);
      setTitulo('');
      setContenido('');
      setError('');
      // Recargar la página para actualizar la lista
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
          <button
            className={styles.nuevoTemaBtn}
            onClick={() => setShowModal(true)}
            style={{ marginBottom: '1rem' }}
          >
            Publicar nuevo tema
          </button>
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
      </main>
    </div>
  );
}
