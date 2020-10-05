import React from 'react'
import { connect, useSelector } from 'react-redux'
import './Filters.css'

import { handleFilterChange } from '../reducers/filterReducer'
import { handleRegionChange } from '../reducers/regionReducer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Filters(props) {

    const theme = useSelector(state => state.theme)

    const handleCountryChange = (event) => {
        props.handleFilterChange(event.target.value);
    }

    const handleRegionSelection = (event) => {
        props.handleRegionChange(event.target.value);
    }

    if (theme !== 'dark'){
        return (
            <div className="filters">
            <div className="filters__country">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" name="countryPicker" id="countryPicker" placeholder="Search for a country..." onChange={handleCountryChange}/>
            </div>
            <div className="filters__region">
               <select name="Filter by Region" id="regionFiter" onChange={handleRegionSelection}>
                   <option value="">Filter By Region</option>
                   <option value="Africa">Africa</option>
                   <option value="America">America</option>
                   <option value="Asia">Asia</option>
                   <option value="Europe">Europe</option>
                   <option value="Oceania">Oceania</option>
               </select>

            </div>   
        </div>
        )
    } else {
        return (
            <div className="filters dark">
            <div className="filters__country dark">
                <FontAwesomeIcon icon={faSearch} />
                <input className="dark" type="text" name="countryPicker" id="countryPicker" placeholder="Search for a country..." onChange={handleCountryChange}/>
            </div>
            <div className="filters__region dark">
               <select className="dark" name="Filter by Region" id="regionFiter" onChange={handleRegionSelection}>
                   <option value="">Filter By Region</option>
                   <option value="Africa">Africa</option>
                   <option value="America">America</option>
                   <option value="Asia">Asia</option>
                   <option value="Europe">Europe</option>
                   <option value="Oceania">Oceania</option>
               </select>
            </div>   
        </div>
        )
    }
}

export default connect( null, { handleFilterChange, handleRegionChange })(Filters)
