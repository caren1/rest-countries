import React from 'react'
import CountryCard from './CountryCard'
import './CountryList.css'


function CountryList({ countries }) {
    console.log(countries);


    if (!countries) {
        return 'Loading...'
    }

    return (
        <div className="countries">
            {countries.map((country) => (
                <CountryCard key={country.numericCode} country={country}/>
            ))}
        </div>
    )
}

export default CountryList
