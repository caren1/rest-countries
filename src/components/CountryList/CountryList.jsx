import React from 'react'
import { CountryCard, DetailedCountry } from '..'
import styles from './CountryList.module.css'

const CountryList = ({ countries, countryFilter, regionFilter, showCountryDetails, onShowCountryDetails, onHideCountryDetails}) => {
    
    // console.log('list 1', countries);
    // console.log('list 2',countryFilter);
    // console.log('list 3',regionFilter);
    // console.log('list 4',showCountryDetails);

    let filteredCountries;

    if (!countryFilter && !regionFilter) {
        filteredCountries = countries;
        // console.log('filtered countries', filteredCountries);
    } else {
        filteredCountries =  countries.filter(country => {
            if (country.name.toLowerCase().includes(countryFilter.toLowerCase())  && country.region.toLowerCase().includes(regionFilter.toLowerCase())){
                return country;
            }       
        })
    }
    
if (filteredCountries.length > 1 && !showCountryDetails) {
    return (
        <div className={styles.countries}>
            {filteredCountries.map((country) => (
            <CountryCard key={country.numericCode} country={country} onShowCountryDetails={onShowCountryDetails} />
            ))}
        </div>
        )

} else if (filteredCountries.length === 1 && !showCountryDetails) {
    const theOnlyCountry = filteredCountries[0];
    return (<DetailedCountry country={theOnlyCountry} onHideCountryDetails={onHideCountryDetails} onShowCountryDetails={onShowCountryDetails}/>)

}  else if (filteredCountries.length < 1 && !showCountryDetails) {
    return (<div><h2>Unfortunately, there are no countries matching the filters.</h2></div>)

} else if (showCountryDetails) {
    return (<DetailedCountry country={showCountryDetails} onHideCountryDetails={onHideCountryDetails} onShowCountryDetails={onShowCountryDetails}/>)
}

}

export default CountryList;