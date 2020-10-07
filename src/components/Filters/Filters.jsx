import React from 'react'
import styles from './Filters.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Filters = ({ onCountryFilterChange, onRegionFilterChange }) => {

return (
<div className={styles.filters}>
    <div className={styles.country}>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" name="countryPicker" id={styles.countryPicker} placeholder="Search for a country..."
            onChange={console.log('changed country')} />
    </div>
    <div className={styles.region}>
        <select name="Filter by Region" id={styles.regionFilter} onChange={ console.log('picked region ')}>
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select> 
    </div>
</div>
)
}

export default Filters
