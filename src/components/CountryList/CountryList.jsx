import React from 'react';
import cx from 'classnames';
import { CountryCard, DetailedCountry } from '..'
import styles from './CountryList.module.css'

const CountryList = ({ theme,  countries, countryFilter, regionFilter, showCountryDetails, onShowCountryDetails, onHideCountryDetails}) => {

    let filteredCountries;

    if (!countryFilter && !regionFilter) {
        filteredCountries = countries;
    } else {
        filteredCountries =  countries.filter(country => {
            if (country.name.toLowerCase().includes(countryFilter.toLowerCase())  && country.region.toLowerCase().includes(regionFilter.toLowerCase())){
                return country;
            }       
        })
    }

    if (!theme) {
        if (filteredCountries.length > 1 && !showCountryDetails) {
            return (
                <div className={styles.countries}>
                    {filteredCountries.map((country) => (
                    <CountryCard theme={theme} key={country.numericCode} country={country} onShowCountryDetails={onShowCountryDetails} />
                    ))}
                </div>
                )
        
        } else if (filteredCountries.length === 1 && !showCountryDetails) {
            const theOnlyCountry = filteredCountries[0];
            return (<DetailedCountry theme={theme} country={theOnlyCountry} onHideCountryDetails={onHideCountryDetails} onShowCountryDetails={onShowCountryDetails}/>)
        
        }  else if (filteredCountries.length < 1 && !showCountryDetails) {
            return (<div><h2>Unfortunately, there are no countries matching the filters.</h2></div>)
        
        } else if (showCountryDetails) {
            return (<DetailedCountry theme={theme} country={showCountryDetails} onHideCountryDetails={onHideCountryDetails} onShowCountryDetails={onShowCountryDetails}/>)
        }
    } else {
        if (filteredCountries.length > 1 && !showCountryDetails) {
            return (
                <div className={cx(styles.countries, styles.darkCountries)}>
                    {filteredCountries.map((country) => (
                    <CountryCard theme={theme} key={country.numericCode} country={country} onShowCountryDetails={onShowCountryDetails} />
                    ))}
                </div>
                )
        
        } else if (filteredCountries.length === 1 && !showCountryDetails) {
            const theOnlyCountry = filteredCountries[0];
            return (<DetailedCountry theme={theme} country={theOnlyCountry} onHideCountryDetails={onHideCountryDetails} onShowCountryDetails={onShowCountryDetails}/>)
        
        }  else if (filteredCountries.length < 1 && !showCountryDetails) {
            return (<div><h2>Unfortunately, there are no countries matching the filters.</h2></div>)
        
        } else if (showCountryDetails) {
            return (<DetailedCountry theme={theme} country={showCountryDetails} onHideCountryDetails={onHideCountryDetails} onShowCountryDetails={onShowCountryDetails}/>)
        } 
    }
}

export default CountryList;