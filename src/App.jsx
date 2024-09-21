import { useEffect } from 'react';
import styles from './App.module.css'
import { LogoDefault, LogoOutline, ArrowDown, GitHubIcon, DribbleIcon, FigmaIcon, HeroMan, Marks } from './assets/images';

export default function App() {

  return (
    <div className={styles.portifolioContainer}>
      <aside className={styles.asideMedia}>
        <div className={styles.line}></div>
        <a href="">
          <img src={GitHubIcon} alt="Icone do github" />
        </a>
        <a href="">
          <img src={DribbleIcon} alt="Icone do dribble" />
        </a>
        <a href="">
          <img src={FigmaIcon} alt="Icone do figma" />
        </a>
      </aside>

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
            <option selected>PT-BR</option>
          </select>

        </nav>
      </header>

      <main>

        <section className={styles.mainContainer}>
          <div className={styles.heroDescription}>
            <h2>Anna is a <span>web designer</span> and <span>front-end developer</span></h2>
            <p>He crafts responsive websites where technologies meet creativity</p>
            <button>Contact me!!</button>
          </div>

          <div className={styles.heroImage}>
            <img src={HeroMan} alt="" />

            <div className={styles.imageLegend}>
              <div className={styles.square}></div>
              <p>Currently working on <span>Portfolio</span></p>
            </div>

          </div>
        </section>

       
      </main>

    </div>
  );
}