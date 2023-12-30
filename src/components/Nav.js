import React from 'react'
import { NavLinks } from './NavLinks'
import styles from '../styles/components/Header.module.css'

export const Nav = () => {
  return (
    <div className={styles.nav}>
    <NavLinks />
    </div>
  )
}
