import { useEffect } from 'react';
import styles from './App.module.css'
import { LogoDefault, LogoOutline, ArrowDown, GitHubIcon, DribbleIcon, FigmaIcon, HeroMan, Marks, ArrowRight, ProjectOne, ProjectTwo, ProjectThree, MoreEqual, ArrowEquivalence, Dots, Square, SquarePhrases } from './assets/images';

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

       <section className={styles.phrasesContainer}>
        <img src={SquarePhrases} id={styles.squarePhrases} alt="Imagem de um quadrado cinza cortado ao meio" />
          <div className={styles.phrasesContent}>
            <img src={Marks} alt="Aspas duplas na cor cinza" />
            <p>With great power comes great electricity bill</p>
          </div>
          <div className={styles.autorPhrases}>
            <img src={Marks} alt="Aspas duplas na cor cinza" />
            <p>- Dr. Who</p>
          </div>
        </section>

        <section className={styles.projectContainer}>
          <div className={styles.projectContent}>
            <div className={styles.projectTitle}>
              <h2><span>#</span>projects</h2>
              <div className={styles.linePurple}></div>
            </div>
            <div className={styles.view}>
                <p>View all</p>
                <img src={ArrowRight} alt="Seta branca com ondulações apontado para a direita" />
              
            </div>
          </div>
          <img id={styles.square} src={Square} alt="Imagem de um quadrado com lados na cor branca" />
          <img id={styles.dots} src={Dots} alt="Pontos brancos" />

          <div className={styles.cardContainer}>

            <div className={styles.card}>
              <img src={ProjectOne} alt=""/>
                <div className={styles.cardTools}>
                  <p>HTML</p>
                  <p>SCSS</p>
                  <p>Python</p>
                  <p>Flask</p>
                </div>
                <h4>ChertNodes</h4>
                <div className={styles.cardApps}>
                  <p>Minecraft</p>
                  <p>servers</p>
                  <p>hosting</p>
                </div>
                <div className={styles.cardButtons}>
                  <button>Live<img src={ArrowEquivalence} alt="Seta com duas pontas" /></button>
                  <button>Cached<img src={MoreEqual} alt="Sinal de maior igual" /></button>
                </div>
            </div>
            <div className={styles.card}>
              <img src={ProjectTwo} alt=""/>
                <div className={styles.cardTools}>
                  <p>React</p>
                  <p>Express</p>
                  <p>Discord.js</p>
                  <p>Node.js</p>
                  <p>HTML</p>
                  <p>SCSS</p>
                  <p>Python</p>
                  <p>Flask</p>
                </div>
                <h4>ProtectX</h4>
                <div className={styles.cardApps}>
                  <p>Discord</p>
                  <p>anti-crash</p>
                  <p>bot</p>
                </div>
                <div className={styles.cardButtons}>
                  <button>Live<img src={ArrowEquivalence} alt="Seta com duas pontas" /></button>
                </div>
            </div>

            <div className={styles.card}>
              <img src={ProjectThree} alt=""/>
                <div className={styles.cardTools}>
                  <p>CSS</p>
                  <p>Express</p>
                  <p>Node.js</p>
                </div>
                <h4>Kahoot Answers Viewer</h4>
                <div className={styles.cardApps}>
                  <p>Get answers to your kahoot quiz</p>
                </div>
                <div className={styles.cardButtons}>
                  <button>Live<img src={ArrowEquivalence} alt="Seta com duas pontas" /></button>
                </div>
            </div>

          </div>
        </section>

    </div>
  );
}