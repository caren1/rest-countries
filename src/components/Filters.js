import React from 'react'
import { connect } from 'react-redux'
import './Filters.css'

import { handleFilterChange } from '../reducers/filterReducer'
import { handleRegionChange } from '../reducers/regionReducer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Filters(props) {

    const handleCountryChange = (event) => {
        props.handleFilterChange(event.target.value);
    }

    const handleRegionSelection = (event) => {
        props.handleRegionChange(event.target.value);
    }

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
               </select>

            </div>
            
            
        </div>
    )
}

export default connect( null, { handleFilterChange, handleRegionChange })(Filters)
