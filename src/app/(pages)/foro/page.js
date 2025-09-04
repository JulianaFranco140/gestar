'use client';
import UserHeader from '../../../components/Header/UserHeader';
import styles from './page.module.css';

export default function Foro() {
  const userName = "Juliana";

  return (
    <div className={styles.container}>
      <UserHeader userName={userName} />
      
      <main className={styles.main}>
        <div className={styles.forumContainer}>
          <h1 className={styles.forumTitle}>Foro de la comunidad</h1>
          
          <div className={styles.shareSection}>
            <h2 className={styles.shareSectionTitle}>Comparte con la comunidad</h2>
            
            <div className={styles.postForm}>
              <textarea 
                className={styles.postTextarea}
                placeholder="¿Cómo te sientes hoy? Comparte tus dudas"
                rows={4}
              />
              <div className={styles.postActions}>
                <button className={styles.publishButton}>
                  Publicar
                </button>
              </div>
            </div>
          </div>

          <div className={styles.postsSection}>
            <div className={styles.post}>
              <div className={styles.postHeader}>
                <div className={styles.userAvatar}>
                  N
                </div>
                <div className={styles.postUserInfo}>
                  <span className={styles.postUserName}>[Nombre]</span>
                  <span className={styles.postTime}>Hace [tiempo]</span>
                </div>
              </div>
              
              <div className={styles.postContent}>
                <p className={styles.postText}>[Texto]</p>
              </div>
              
              <div className={styles.postActions}>
                <button className={styles.respondButton}>
                  Responder
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
