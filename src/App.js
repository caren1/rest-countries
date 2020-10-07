import React, { useState, useEffect } from 'react';
import { Header, Filters, CountryList } from './components'
import { fetchAll } from './api/index'

function App() {

 
  const [ countries, setCountries ] = useState([]);
  const [ countriesFilter, setCountriesFilter ] = useState('');
  const [ regionFilter, setRegionFilter ] = useState();
  const [ showCountryDetails, setShowCountryDetails ] =  useState();

  useEffect(() => {
    async function getAllCountries () {
      const data = await fetchAll();
      if (data) {
        console.log(data);
        setCountries(data);
      }
    }
    getAllCountries();
  }, [])
  
  const handleCountriesFilter = (event) => {
    setCountriesFilter(event.target.value); 
    setShowCountryDetails();
  }

  const handleRegionFilter = (region) => {
    setRegionFilter(region);
    setShowCountryDetails();
  }

  const onShowCountryDetails = (country) => {
    setShowCountryDetails(country);
  }
  
  return (
    <div className="App">
     <Header /> 
     <Filters onCountryFilterChange={handleCountriesFilter} onRegionFilterChange={handleRegionFilter}/>
     <CountryList countries={countries} countryFilter={countriesFilter} regionFilter={regionFilter} showCountryDetails={showCountryDetails} onShowCountryDetails={onShowCountryDetails}/>
    </div>
  );
}

export default App;
