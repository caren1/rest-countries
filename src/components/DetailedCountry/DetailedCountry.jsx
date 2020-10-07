import React from 'react'
import styles from './DetailedCountry.module.css'

const DetailedCountry = ({ country }) => {

return (
<div className={styles.detailedCountry}>
    <button className={styles.buttonBack} onClick={()=> console.log('hiding details')}>Back</button>
    <div className="flag">
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
                {country.borders.map((border) => (
                <button className={styles.buttonBorder} key={border}>{border}</button>
                ))}
            </div>
        </div>
    </div>
</div>
)
}

export default DetailedCountry