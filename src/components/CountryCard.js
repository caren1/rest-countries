import React from 'react'
import './CountryCard.css'

function CountryCard({ name, population, region, capital, flag }) {
    return (
        <div className="countryCard">
            <img src={flag} alt="" />
            <div className="countryCard__details">
                <h3>{name}</h3>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>  
            </div>
                      
        
        </div>
    )
}

export default CountryCard
