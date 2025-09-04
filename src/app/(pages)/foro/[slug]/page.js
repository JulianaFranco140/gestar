"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import UserHeader from "../../../../components/Header/UserHeader";
import styles from "../page.module.css";

export default function DetalleTema() {
  const { slug } = useParams();
  const [tema, setTema] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [comentariosLoading, setComentariosLoading] = useState(true);
  const [comentario, setComentario] = useState('');
  const [publicando, setPublicando] = useState(false);
  const [errorComentario, setErrorComentario] = useState('');
  const [respondiendoId, setRespondiendoId] = useState(null);
  const [respuesta, setRespuesta] = useState('');
  const [publicandoRespuesta, setPublicandoRespuesta] = useState(false);
  const [errorRespuesta, setErrorRespuesta] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("gestarUser");
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      }
    }
    async function fetchTema() {
      setLoading(true);
      try {
        const res = await fetch(`/api/foro/tema?slug=${slug}`);
        const data = await res.json();
        setTema(data.tema || null);
        if (data.tema?.id) fetchComentarios(data.tema.id);
      } catch (e) {
        setTema(null);
      }
      setLoading(false);
    }
    if (slug) fetchTema();
  }, [slug]);

  useEffect(() => {
    if (tema?.id) {
      fetchComentarios(tema.id);
    }
  }, [tema]);

  function tiempoRelativo(fecha) {
    const ahora = new Date();
    const ahoraUTC = new Date(ahora.getTime() + ahora.getTimezoneOffset() * 60000);
  const fechaComentario = new Date(fecha);
    const diff = (ahoraUTC.getTime() - fechaComentario.getTime()) / 1000;
    if (diff < 60) return 'ahora';
    if (diff < 3600) {
      const mins = Math.floor(diff/60);
      return `hace ${mins} minuto${mins === 1 ? '' : 's'}`;
    }
    if (diff < 86400) {
      const horas = Math.floor(diff/3600);
      return `hace ${horas} hora${horas === 1 ? '' : 's'}`;
    }
    if (diff < 2592000) {
      const dias = Math.floor(diff/86400);
      return `hace ${dias} día${dias === 1 ? '' : 's'}`;
    }
    if (diff < 31536000) {
      const meses = Math.floor(diff/2592000);
      return `hace ${meses} mes${meses === 1 ? '' : 'es'}`;
    }
    const años = Math.floor(diff/31536000);
    return `hace ${años} año${años === 1 ? '' : 's'}`;
  }

  async function fetchComentarios(temaId) {
    setComentariosLoading(true);
    try {
      const res = await fetch(`/api/foro/comentarios?tema_id=${temaId}`);
      const data = await res.json();
      setComentarios(data.comentarios || []);
    } catch (e) {
      setComentarios([]);
    }
    setComentariosLoading(false);
  }

  async function publicarComentario() {
    if (!comentario.trim()) {
      setErrorComentario('Escribe tu comentario.');
      return;
    }
    setPublicando(true);
    setErrorComentario('');
    try {
      const res = await fetch('/api/foro/comentarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tema_id: tema.id,
          user_id: user?.id,
          contenido: comentario,
          nivel: 1,
        }),
      });
      if (!res.ok) throw new Error('Error al publicar');
      setComentario('');
      fetchComentarios(tema.id);
    } catch (e) {
      setErrorComentario(e.message);
    }
    setPublicando(false);
  }

  async function publicarRespuesta(parentId, autor) {
    if (!respuesta.trim()) {
      setErrorRespuesta('Escribe tu respuesta.');
      return;
    }
    setPublicandoRespuesta(true);
    setErrorRespuesta('');
    try {
      const res = await fetch('/api/foro/comentarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tema_id: tema.id,
          user_id: user?.id,
          contenido: `@${autor} - ${respuesta}`,
          parent_id: parentId,
          nivel: 2,
        }),
      });
      if (!res.ok) throw new Error('Error al responder');
      setRespuesta('');
      setRespondiendoId(null);
      fetchComentarios(tema.id);
    } catch (e) {
      setErrorRespuesta(e.message);
    }
    setPublicandoRespuesta(false);
  }

  return (
    <div className={styles.container}>
      <UserHeader userName={user?.nombres || ""} />
      <main className={styles.main}>
        <div className={styles.forumContainer}>
          <Link href="/foro" className={styles.volverForoBtn}>&larr; Volver al foro</Link>
          {loading ? (
            <div className={styles.loading}>Cargando tema...</div>
          ) : !tema ? (
            <div className={styles.noTemas}>Tema no encontrado.</div>
          ) : (
            <div className={styles.temaDetalle}>
                <h1 className={styles.temaTitulo}>{tema.titulo}</h1>
                <div className={styles.temaMeta}>
                  <span className={styles.temaAutor}>Por {tema.autor}</span>
                  <span className={styles.temaFecha}>{tema.fecha}</span>
                  {user?.id && tema.user_id === user.id && (
                    <button
                      className={styles.eliminarBtn}
                      title="Eliminar tema"
                      onClick={() => {
                        if (window.confirm('¿Estás seguro de que quieres eliminar este tema? Esta acción no se puede deshacer.')) {
                          fetch(`/api/foro/tema?id=${tema.id}`, { method: 'DELETE' })
                            .then(res => res.ok ? window.location.href = '/foro' : alert('Error al eliminar tema'));
                        }
                      }}
                    >
                      Eliminar
                    </button>
                  )}
                </div>
                <div className={styles.temaContenido}>{tema.contenido}</div>
            </div>
          )}
          <div className={styles.comentariosSection}>
            <h2 className={styles.comentariosTitle}>Comentarios</h2>
            {comentariosLoading ? (
              <div className={styles.loading}>Cargando comentarios...</div>
            ) : (
              <>
                {comentarios.filter(c => !c.parent_id).length === 0 ? (
                  <div className={styles.noTemas}>Sé el primero en comentar.</div>
                ) : (
                  <ul className={styles.comentariosList}>
                    {comentarios.filter(c => !c.parent_id).map(com => (
                      <li key={com.id} className={styles.comentarioItem}>
                        <div className={styles.comentarioMeta}>
                          <span className={styles.comentarioAutor}>{com.autor}</span>
                          <span className={styles.comentarioFecha}>{tiempoRelativo(com.created_at)}</span>
                        </div>
                        <div className={styles.comentarioContenido}>{com.contenido}</div>
                        <button className={styles.responderBtn} onClick={() => { setRespondiendoId(com.id); setRespuesta(''); setErrorRespuesta(''); }}>
                          Responder
                        </button>
                        <ul className={styles.respuestasList}>
                          {comentarios.filter(r => r.parent_id === com.id).map(r => (
                            <li key={r.id} className={styles.comentarioItem}>
                              <div className={styles.comentarioMeta}>
                                <span className={styles.comentarioAutor}>{r.autor}</span>
                                <span className={styles.comentarioFecha}>{tiempoRelativo(r.created_at)}</span>
                              </div>
                              <div className={styles.comentarioContenido}>{r.contenido}</div>
                            </li>
                          ))}
                        </ul>
                        {respondiendoId === com.id && (
                          <div className={styles.responderForm}>
                            <textarea
                              className={styles.comentarioTextarea}
                              value={respuesta}
                              onChange={e => setRespuesta(e.target.value)}
                              rows={3}
                              placeholder={`@${com.autor} - Escribe tu respuesta...`}
                              disabled={publicandoRespuesta}
                            />
                            {errorRespuesta && <div className={styles.comentarioError}>{errorRespuesta}</div>}
                            <button className={styles.publicarBtn} onClick={() => publicarRespuesta(com.id, com.autor)} disabled={publicandoRespuesta}>
                              {publicandoRespuesta ? 'Publicando...' : 'Publicar respuesta'}
                            </button>
                            <button className={styles.cancelarBtn} onClick={() => { setRespondiendoId(null); setRespuesta(''); setErrorRespuesta(''); }} disabled={publicandoRespuesta}>
                              Cancelar
                            </button>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
            <div className={styles.nuevoComentarioForm}>
              <textarea
                className={styles.comentarioTextarea}
                value={comentario}
                onChange={e => setComentario(e.target.value)}
                rows={3}
                placeholder="Escribe un comentario..."
                disabled={publicando}
              />
              {errorComentario && <div className={styles.comentarioError}>{errorComentario}</div>}
              <button className={styles.publicarBtn} onClick={publicarComentario} disabled={publicando}>
                {publicando ? 'Publicando...' : 'Publicar comentario'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
