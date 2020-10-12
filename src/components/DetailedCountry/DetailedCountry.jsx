import React, { useState, useEffect } from 'react'
import styles from './DetailedCountry.module.css'

import { fetchOne } from '../../api/index'

const DetailedCountry = ({ country, onShowCountryDetails, onHideCountryDetails }) => {

    const [ borderCountries, setBorderCountries ] = useState([])

    const asyncBorders = async (border) => {
        return Promise.resolve(fetchOne(border));
    }
   

    useEffect(() => {
    
        const getBorderCountries = async () => {
            const fetchedBorders = await Promise.all(country.borders.map((border) =>
            asyncBorders(border)))
            if (fetchedBorders) {
                setBorderCountries(fetchedBorders)
            }
        } 
         getBorderCountries();
    }, [])



    console.log('here ', borderCountries);
return (
<div className={styles.detailedCountry}>
    <button className={styles.buttonBack} onClick={onHideCountryDetails}> ← Back</button>
    <div className={styles.flag}>
        <img src={country.flag} alt="" />
    </div> 
    <div className={styles.details}>
        <h1>{country.name}</h1>
        <div className={styles.subDetails}> 
            <div className={styles.topSection}>
                <p><strong>Native name: </strong>{country.nativeName}</p>
                <p><strong>Population: </strong>{country.population}</p>
                <p><strong>Region: </strong>{country.region}</p>
                <p><strong>Sub Region: </strong>{country.subregion}</p>
                <p><strong>Capital: </strong>{country.capital}</p>
            </div>
            <div className={styles.bottomSection}>
                <p><strong>Top Level Domain: </strong>{country.topLevelDomain[0]}</p>
                <p><strong>Currencies: </strong>{country.currencies?.map((currency) => currency.name).reduce((prev,curr) => [prev, ', ', curr])}</p>
                <p><strong>Languages: </strong>{country.languages?.map((language) => language.name).reduce((prev, curr) => [prev, ', ', curr])}</p>
            </div>
        </div>
        <div className={styles.borderCountries}>
            <p className={styles.title}><strong>Border Countries:</strong></p>
            <div className={styles.borders}>
                {borderCountries.map((country) => (
                <button className={styles.buttonBorder} key={country.alphaCode} onClick={() => onShowCountryDetails(country)}>{country.name}</button>
                ))}
            </div>
        </div>
    </div>
</div>
)
}

export default DetailedCountry