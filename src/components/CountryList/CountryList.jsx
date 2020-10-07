import React from 'react'
import { CountryCard, DetailedCountry } from '..'
import styles from './CountryList.module.css'

const CountryList = ({ countries, countryFilter, regionFilter, showCountryDetails, onShowCountryDetails }) => {
    
    // console.log('list', countries);
    // console.log('list',countryFilter);
    // console.log('list',regionFilter);
    // console.log('list',showCountryDetails);

    let filteredCountries;

    if (!countryFilter && !regionFilter) {
        filteredCountries = countries;
    } else {
        filteredCountries = countries.filter((country) => {
            if (country.name.toLowerCase().includes(countryFilter) &&
            country.region.toLowerCase().includes(regionFilter.toLowerCase())){
            return true;
            }
            return false;  
            })
    }
 
if (filteredCountries.length > 1 && !showCountryDetails) {
    return (
        <div className={styles.countries}>
            {filteredCountries.map((country) => (
            <CountryCard key={country.numericCode} country={country} showDetails={onShowCountryDetails} />
            ))}
        </div>
        )

} else if (filteredCountries.length === 1 && !showCountryDetails) {
    const theOnlyCountry = filteredCountries[0];
    return (<DetailedCountry country={theOnlyCountry}/>)

}  else if (filteredCountries.length < 1 && !showCountryDetails) {
    return (<div><h2>Unfortunately, there are no countries matching the filters.</h2></div>)

} else if (showCountryDetails) {
    return (<DetailedCountry country={showCountryDetails}/>)
}

}

export default CountryList;