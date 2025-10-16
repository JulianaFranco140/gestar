"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './UserHeader.module.css';

const UserHeader = ({ userName = "Usuario" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userInitial = userName ? userName.charAt(0).toUpperCase() : 'U';
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('gestarUser');
      router.push('/');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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

      {/* Botón hamburguesa (solo móvil) */}
      <button 
        className={styles.hamburger} 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {/* Navegación desktop */}
      <nav className={`${styles.navigation} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link href="/dashboard" className={styles.navLink} onClick={closeMobileMenu}>
          Inicio
        </Link>
        <Link href="/foro" className={styles.navLink} onClick={closeMobileMenu}>
          Foro
        </Link>
        <Link href="/hospitales" className={styles.navLink} onClick={closeMobileMenu}>
          Hospitales
        </Link>
        <Link href="/apoyo-psicologico" className={styles.navLink} onClick={closeMobileMenu}>
          Apoyo Psicológico
        </Link>

        {/* Usuario en menú móvil */}
        <div className={styles.mobileUserSection}>
          <div className={styles.mobileUserInfo}>
            <div className={styles.userAvatar}>
              {userInitial}
            </div>
            <span className={styles.userName}>{userName}</span>
          </div>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* Usuario desktop */}
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

      {/* Overlay para cerrar menú móvil */}
      {mobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}
    </header>
  );
};

export default UserHeader;
