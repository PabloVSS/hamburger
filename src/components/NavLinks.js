import React from 'react'
import styles from '../styles/components/Header.module.css'
import { menuData } from "../../menuData";


export const NavLinks = () => {
  return (
    <>
     <ul className={styles.menu}>
     {menuData.map((menuData, index) => (
                    <a
                      key={index}
                     src={menuData.link}
                     >
                     {menuData.text}</a>
     ))}
    </ul>
    </>
  )
}
