
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
      </main>
    </div>
  );
}
