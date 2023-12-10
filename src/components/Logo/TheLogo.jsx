import React from 'react'
import Logoimg from '.././assests/logoji.png'
import styles from './Logo.module.css'
export default function Logo() {
  return (
    <div>
 <img  className={styles.img}src={Logoimg} alt="logo" />
    </div>
  )
}
