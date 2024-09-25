import { useEffect } from 'react';
import styles from './App.module.css'
import { LogoDefault, LogoOutline, ArrowDown, GitHubIcon, DribbleIcon, FigmaIcon, HeroMan, Marks, ArrowRight, ProjectOne, ProjectTwo, ProjectThree, MoreEqual, ArrowEquivalence, Dots, Square, SquarePhrases, SquareSkills, SquareAbout, DotsAbout, AboutMan, ArrowAbout, DotsContact, Discord, Email } from './assets/images';

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

        <section className={styles.skillsContainer}>
          <div className={styles.skillsTitle}>
            <h2><span>#</span>skills</h2>
            <div className={styles.linePurpleSkills}></div>
          </div>

          <div className={styles.skillsContent}>
            <img src={SquareSkills} alt="Imagem com vários quadrados" />
            <div className={styles.skillsCardsContainer}>
              <div className={styles.columCard}>
                <div className={styles.skillsCard}>
                  <h5>Languages</h5>
                  <div className={styles.skillsTools}>
                    <p>TypeScript</p>
                    <p>Lua</p>
                    <p>Python</p>
                    <p>JavaScript</p>
                  </div>
                </div>
              </div>

              <div className={styles.columCard}>
                <div className={styles.skillsCard}>
                  <h5>Databases</h5>
                  <div className={styles.skillsTools}>
                    <p>SQLite</p>
                    <p>PostgreSQL</p>
                    <p>Mongo</p>
                  </div>
                </div>
                
                <div className={styles.skillsCard}>
                  <h5>Other</h5>
                  <div className={styles.skillsTools}>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>EJS</p>
                    <p>SCSS</p>
                    <p>REST</p>
                    <p>Jinja</p>
                  </div>
                </div>

              </div>
              <div className={styles.columCard}>
                <div className={styles.skillsCard}>
                  <h5>Tools</h5>
                  <div className={styles.skillsTools}>
                    <p>VSCode</p>
                    <p>Neovim</p>
                    <p>Linux</p>
                    <p>Figma</p>
                    <p>XFCE</p>
                    <p>Arch</p>
                    <p>Git</p>
                    <p>Font Awesome</p>
                  </div>
                </div>

                <div className={styles.skillsCard}>
                  <h5>Frameworks</h5>
                  <div className={styles.skillsTools}>
                    <p>React</p>
                    <p>Vue</p>
                    <p>Disnake</p>
                    <p>Discord.js</p>
                    <p>Flask</p>
                    <p>Express.js</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <section className={styles.aboutContainer}>
          <img src={DotsAbout} id={styles.dotsAbout} alt="Pontos brancos que formam um quadrado" />
          <img src={SquareAbout} id={styles.squareAbout} alt="Meio quadrado na cor cinzaz" />
          <div className={styles.aboutContent}>
            <div className={styles.aboutTitle}>
              <h2><span>#</span>about-me</h2>
              <div className={styles.linePurpleAbout}></div>
            </div>
            <div className={styles.aboutText}>
              <p>Hello, i’m Elias!</p>
              <p>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
              <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
              <button>Read more <img src={ArrowAbout} alt="Seta na cor branca apontando para a direita" />  </button>
            </div>
          </div>
          <img src={AboutMan} id={styles.aboutMan} alt="" />
        </section>

        <section className={styles.contactContainer}>
        <img src={DotsContact} id={styles.dotsContact} alt="" />
          <div className={styles.contactContent}>
            <div className={styles.contactTitle}>
              <h2><span>#</span>contacts</h2>
              <div className={styles.linePurpleContact}></div>
            </div>
            <div className={styles.contactText}>
              <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <h5>Message me here</h5>
            <p><img src={Discord} alt="" />!Anna#3519</p>
            <p><img src={Email} alt="" />anna@anna.me</p>
          </div>
        </section>

    </div>
  );
}