import React from 'react'
import CountryCard from './CountryCard'
import DetailedCountry from './DetailedCountry'
import './CountryList.css'


const CountryList = ({ countries, onShowCountryDetails, showCountryDetails })  => {
    // console.log(countries);


    if (!showCountryDetails) {
        return (
            <div className="countries">
                {countries.map((country) => (
                    <CountryCard key={country.numericCode} country={country} showDetails={onShowCountryDetails}/>
                ))}
            </div>
        )
    } else {
        return (
            <DetailedCountry country={showCountryDetails}/> 
        )
    }

    
}

export default CountryList
