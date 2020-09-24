import React from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="header">
             <h2>Where in the world?</h2>
             <button className="themeToggle"><FontAwesomeIcon icon={faMoon}/> Dark Mode</button>
             {/* <button><FontAwesomeIcon icon={faSun}/> Light Mode</button> */}
        </div>
    )
}

export default Header
