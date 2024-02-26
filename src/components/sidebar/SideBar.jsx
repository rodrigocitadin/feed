import { PencilSimpleLine } from 'phosphor-react'
import styles from './SideBar.module.css'

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1707229723342-1dc24b80ffd6?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <img src="https://github.com/rodrigocitadin.png" />
        <strong>Rodrigo Citadin</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href='#'>
          <PencilSimpleLine width={20} weight="bold" />
          Edit Profile
        </a>
      </footer>
    </aside>
  )
}
