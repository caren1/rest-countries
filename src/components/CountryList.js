import React from 'react'
import { useSelector } from 'react-redux'
import CountryCard from './CountryCard'
import DetailedCountry from './DetailedCountry'
import './CountryList.css'


const CountryList = ({ countries, onShowCountryDetails, showCountryDetails, hideCountryDetails })  => {
    console.log(countries);

    const theme = useSelector(state => state.theme)


    if (!showCountryDetails) {
        if (theme === 'light') {
            return (
                <div className="countries">
                    {countries.map((country) => (
                        <CountryCard key={country.numericCode} country={country} showDetails={onShowCountryDetails}/>
                    ))}
                </div>
            )
        } else {
            return (
                <div className="countries dark">
                    {countries.map((country) => (
                        <CountryCard key={country.numericCode} country={country} showDetails={onShowCountryDetails} theme={theme}/>
                    ))}
                </div>
            )
        }
       
    }  else {
        return (
            <DetailedCountry country={showCountryDetails} hideDetails={hideCountryDetails}/> 
        )
    }

    
}

export default CountryList
