import styles from './App.module.css' // O 'module' adiciona segurança ao arquivo (ele acrescenta hash)

import LogoDefault from './assets/image/logo-default.svg'
import LogoOutline from './assets/image/logo-outline.svg'
import ArrowDown from './assets/image/arrow-down.svg'

export default function App(){
  return (
    <div className={styles.portifolioContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={LogoDefault} alt="Imagem do logo do portifolio" />
          <h1>Anna</h1>
        </div>
      </header>
    </div>
  )
}
