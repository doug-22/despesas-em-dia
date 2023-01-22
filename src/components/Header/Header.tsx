import styles from './Header.module.scss'

export function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <img src='/images/logo-gold.svg' alt="Samuel Advocacia" />
        <li><a>Inicio</a></li>
        <li><a>Sobre</a></li>
        <li><a>Serviços</a></li>
        <li><a>Publicações</a></li>
        <li><a>Materiais</a></li>
      </nav>
    </header>
  )
}