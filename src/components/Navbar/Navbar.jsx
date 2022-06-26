import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink
          className={(isActive) => (isActive ? styles.active : undefined)}
          to='/profile'>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={(isActive) => (isActive ? styles.active : undefined)}
          to='/dialogs'>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          className={(isActive) => (isActive ? styles.active : undefined)}
          to='/users'>
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <a href='#s'>News</a>
      </div>

      <div className={styles.item}>
        <a href='#s'>Music</a>
      </div>
    </nav>
  )
}

export default Navbar
