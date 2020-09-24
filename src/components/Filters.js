import React from 'react'
import './Filters.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Filters() {


    return (
        <div className="filters">
            <div class="filters__country">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" name="countryPicker" id="countryPicker" placeholder="Search for a country..."/>
            </div>
            <div class="filters__region">
               <select name="Filter by Region" id="regionFiter">
                   <option value="">Filter By Region</option>
                   <option value="Africa">Africa</option>
               </select>
            </div>
            
            
        </div>
    )
}

export default Filters
