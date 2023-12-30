import React, { useState } from 'react'
import styles from '../styles/components/Header.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { NavLinks } from './NavLinks';

export const MobileNav = () => {
  const [open, setOpen] = useState(false)

  const handledClick = () => {
    setOpen(!open)
  }

  
  return (
    <nav className={styles.mobilenavigation}>
      <div className={styles.nav_hamburger} >
      {!open ? <GiHamburgerMenu className={styles.hamburger} 
      onClick={handledClick => setOpen(!open)}
      /> :  <GrClose onClick={() => setOpen(!open)} />}
      </div>
      <div className={styles.nav_links}>
      {open && <NavLinks />}
      </div>
    </nav>
  )
}