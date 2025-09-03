import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
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
      <div className={styles.headerButton}>
        <Link href="/">
          <button className={styles.BackButton}>Volver a inicio</button>
        </Link>
      </div>

    </header>
  );
};

export default Header;
