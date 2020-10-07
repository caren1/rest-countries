import React from 'react'
import styles from './Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

return (
<div className={styles.header}>
    <h2>Where in the world?</h2>
    <button className={styles.buttonToggle} onClick={()=> console.log('toggling the theme')}>
        <FontAwesomeIcon icon={faMoon} /> Dark Mode</button>
    {/* <button className="themeToggle" onClick={()=> handleToggleTheme('light')}>
        <FontAwesomeIcon icon={faSun} /> Light Mode</button> */}
</div>
)
}

export default Header
