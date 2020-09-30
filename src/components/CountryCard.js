import React from 'react'
import './CountryCard.css'

function CountryCard({country : { name, population, region, capital, flag }}) {
    return (
        <div className="countryCard">
            <div class="countryCard__image">
                <img src={flag} alt="" />
            </div>
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
