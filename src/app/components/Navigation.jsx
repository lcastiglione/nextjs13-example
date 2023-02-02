import Link from 'next/link'
import styles from './Navigation.module.css'
// Se importar stilos a nivel local como si fueran clases

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Posts',
  route: '/posts'
}]

export default function Navigation () {
  return (
    <header className={styles.header}>
      <ul className={styles.navigation}>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
