import React from 'react'
import './DetailedCountry.css'

function DetailedCountry() {
    return (
        <div className="detailedCountry">
            <div class="flag">
                <img src="" alt="" />
            </div>
            <div class="details">
                <h1>Country</h1>
                <div class="subDetails">
                    <p>Native name</p>
                    <p>Population</p>
                    <p>Region</p>
                    <p>Sub Region</p>
                    <p>Capital</p>
                    <p>Top Level Domain</p>
                    <p>Currencies</p>
                    <p>Native name</p>
                </div>
            <div class="borderCountries">
                <p>Border Countries: </p>
                <button>Country</button>
                <button>Country</button>
                <button>Country</button>
            </div>
            </div>
        </div>
    )
}

export default DetailedCountry
