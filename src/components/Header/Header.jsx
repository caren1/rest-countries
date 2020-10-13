import React from 'react'
import cx from 'classnames'
import styles from './Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons' 
 
const Header = ({ theme, handleThemeToggle }) => {
    
    if (!theme) {
        return (
            <div className={styles.header}>
        <h2>Where in the world?</h2>    
        <button className={styles.buttonToggle} onClick={handleThemeToggle}>
            <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </button> 
        </div>
        )
    } else {
        return (
            <div className={cx(styles.header, styles.dark)}>
        <h2>Where in the world?</h2> 
        <button className={cx(styles.buttonToggle, styles.dark)} onClick={handleThemeToggle}>
            <FontAwesomeIcon icon={faSun} />  Light Mode
        </button>
        </div>
        )
    }
}

export default Header
