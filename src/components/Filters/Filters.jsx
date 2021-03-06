import React from 'react'
import cx from 'classnames'
import styles from './Filters.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Filters = ({ theme, countriesFilter, onCountryFilterChange, regionFilter, onRegionFilterChange }) => {


    const handleRegionChange = (event) =>  {
        onRegionFilterChange(event.target.value);
    } 

    if (!theme) {
        return (
            <div className={styles.filters}>
                <div className={styles.country}>
                    <FontAwesomeIcon icon={faSearch} />
                    <input value={countriesFilter} type="text" name="countryPicker" id={styles.countryPicker} placeholder="Search for a country..."
                        onChange={onCountryFilterChange} />
                </div>
                <div className={styles.region}>
                    <select value={regionFilter} name="Filter by Region" id={styles.regionFilter} onChange={handleRegionChange}>
                        <option value="">Filter By Region</option>
                        <option value="">None</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option> 
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select> 
                </div>
            </div>
            )
    } else {
        return (
            <div className={cx(styles.filters, styles.darkFilters)}> 
                <div className={cx(styles.country, styles.dark)}>
                    <FontAwesomeIcon icon={faSearch} />
                    <input value={countriesFilter} type="text" name="countryPicker" id={cx(styles.countryPicker, styles.dark)} placeholder="Search for a country..."
                        onChange={onCountryFilterChange} />
                </div>
                <div className={cx(styles.region, styles.dark)}>
                    <select value={regionFilter} name="Filter by Region" id={cx(styles.regionFilter, styles.dark)} onChange={handleRegionChange}>
                        <option value="">Filter By Region</option>
                        <option value="">None</option>
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
}

export default Filters
