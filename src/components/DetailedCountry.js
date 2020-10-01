import React from 'react'
import './DetailedCountry.css'

function DetailedCountry({ country }) {
    return (
        <div className="detailedCountry">
            <button className="btn-primary">Back</button>
            <div className="flag">
                <img src="https://restcountries.eu/data/afg.svg" alt="" />
            </div>
            <div className="details">
                <h1>{country.name}</h1>
                <div className="subDetails">
                    <p><strong>Native name: </strong>{country.nativeName}</p>
                    <p><strong>Population: </strong>{country.population}</p>
                    <p><strong>Region: </strong>{country.region}</p>
                    <p><strong>Sub Region: </strong>{country.subregion}</p>
                    <p><strong>Capital: </strong>{country.capital}</p>
                    <p className="levelDomain"><strong>Top Level Domain: </strong>{country.topLevelDomain[0]}</p>
                    <p><strong>Currencies: </strong>{country.currencies.map((currency) => currency.join(','))}</p>
                    <p><strong>Languages: </strong>{country.languages.map((language) => language.join(','))}</p>
                </div>
            <div className="borderCountries">
                <p className=" borderCountries__title"><strong>Border Countries:</strong></p>
                <div className="borderCountries__borders">
                    {country.borders.map((border) => (
                    <button className="btn-primary">{border}</button>
                ))}              
                </div>
            </div>
            </div>
        </div>
    )
}

export default DetailedCountry
