import React from 'react'
import styles from './CountryCard.module.css'

const CountryCard = ({ country, }) => {

    const { name, population, region, capital, flag } = country;

    return (
        <div className={styles.countryCard} onClick={() => console.log('clickedCountry')}>
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

export default CountryCard