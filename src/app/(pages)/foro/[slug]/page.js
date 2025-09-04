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
      } catch (e) {
        setTema(null);
      }
      setLoading(false);
    }
    if (slug) fetchTema();
  }, [slug]);

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
              </div>
              <div className={styles.temaContenido}>{tema.contenido}</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
