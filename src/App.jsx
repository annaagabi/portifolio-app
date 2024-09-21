import { useEffect } from 'react';
import styles from './App.module.css'
import { LogoDefault, LogoOutline, ArrowDown, GitHubIcon, DribbleIcon, FigmaIcon } from './assets/images';

export default function App() {

  return (
    <div className={styles.portifolioContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={LogoDefault} alt="Imagem do portfolio logo" />
          <h1>Anna</h1>
        </div>
        <nav className={styles.nav}>
          <a href="">
            <p><span>#</span> home</p>
          </a>
          <a href="">
            <p><span>#</span> works</p>
          </a>
          <a href="">
            <p><span>#</span> about-me</p>
          </a>
          <a href="">
            <p><span>#</span> contacts</p>
          </a>
          <select>
            {/* <img src={ArrowDown} alt="icone de seta para baixo" /> */}
            <option>EN</option>
            <option>PT-BR</option>
          </select>
        </nav>
      </header>
    </div>
  );
}