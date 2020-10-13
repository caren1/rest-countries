import React from 'react';
import cx from 'classnames';
import styles from './CountryCard.module.css'

const CountryCard = ({ theme, country, onShowCountryDetails }) => {

    const { name, population, region, capital, flag } = country;

    if (!theme) {
        return (
            <div className={styles.countryCard} onClick={() => onShowCountryDetails(country)}>
                <div className={styles.image}>
                    <img src={flag} alt="" />
                </div>      
                <div className={styles.details}>
                    <h3>{name}</h3>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Capital:</strong> {capital}</p>  
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.countryCard} onClick={() => onShowCountryDetails(country)}>
                <div className={styles.image}>
                    <img src={flag} alt="" />
                </div>      
                <div className={styles.details}>
                    <h3>{name}</h3>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Capital:</strong> {capital}</p>  
                </div>
            </div>
        )
    }
}

export default CountryCard
