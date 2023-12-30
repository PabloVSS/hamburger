import React from 'react'
import { MobileNav } from './MobileNav'
import styles from '../styles/components/Header.module.css'
import { Nav } from './Nav'

export const Header = () => {
  return (
        <nav className={styles.header}>
                <Nav/>
                <MobileNav />
        </nav>
  )
}
