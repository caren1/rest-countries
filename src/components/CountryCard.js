import React from 'react'
import './CountryCard.css'

function CountryCard() {
    return (
        <div className="countryCard">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png" alt="" />
            <div className="countryCard__details">
                <h3>Germany</h3>
                <p><strong>Population:</strong> 81,7770,900</p>
                <p><strong>Region:</strong> Europe</p>
                <p><strong>Capital:</strong> Berlin</p>  
            </div>
                      
        
        </div>
    )
}

export default CountryCard
