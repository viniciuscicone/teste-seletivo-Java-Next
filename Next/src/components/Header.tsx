import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Hierarchy</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
