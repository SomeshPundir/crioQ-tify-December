import React from 'react'
import Button from '../Button/Button.jsx'
import Logo from '../Logo/TheLogo.jsx'
import Search from '../Search/Search.jsx'
import styles from './Navbar.module.css'
function Navbar(props) {
  return (
    <nav className={styles.navbar}>
    <a href="/">
    <Logo />

    </a>
        <Search placeholder={"search a song of your choice"}/>
       <Button>Give Feedback</Button> 

    </nav>
  )
}


export default Navbar
