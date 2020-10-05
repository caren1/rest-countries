import React from 'react'
import { connect, useSelector } from 'react-redux'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { toggleTheme } from '../reducers/themeReducer'


function Header(props) {

    const theme = useSelector(state => state.theme)

    const handleToggleTheme = (theme) => {
        props.toggleTheme(theme);
    }

    if (theme === 'dark') {
        return (
            <div className="header dark">
             <h2>Where in the world?</h2>
             { theme  === 'light' ? 
             <button className="themeToggle dark" onClick={() => handleToggleTheme('dark')}><FontAwesomeIcon icon={faMoon}/> Dark Mode</button>
              : 
            <button className="themeToggle dark" onClick={() => handleToggleTheme('light')}><FontAwesomeIcon icon={faSun}/> Light Mode</button>}
        </div>
        )
    } else {
        return (
            <div className="header">
             <h2>Where in the world?</h2>
             { theme  === 'light' ? 
             <button className="themeToggle" onClick={() => handleToggleTheme('dark')}><FontAwesomeIcon icon={faMoon}/> Dark Mode</button>
              : 
            <button className="themeToggle" onClick={() => handleToggleTheme('light')}><FontAwesomeIcon icon={faSun}/> Light Mode</button>}
        </div>
        )
    }
}

export default connect( null, { toggleTheme })(Header)
