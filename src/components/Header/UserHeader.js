"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './UserHeader.module.css';

const UserHeader = ({ userName = "Usuario" }) => {
  const userInitial = userName ? userName.charAt(0).toUpperCase() : 'U';
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('gestarUser');
      router.push('/');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="GeStar Logo"
            width={160}
            height={60}
          />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <Link href="/dashboard" className={styles.navLink}>
          Inicio
        </Link>
        <Link href="/foro" className={styles.navLink}>
          Foro
        </Link>
        <Link href="/hospitales" className={styles.navLink}>
          Hospitales
        </Link>
        <Link href="/apoyo-psicologico" className={styles.navLink}>
          Apoyo Psicológico
        </Link>
      </nav>
      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            {userInitial}
          </div>
          <span className={styles.userName}>{userName}</span>
          <div className={styles.dropdownArrow}>
            ▼
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
