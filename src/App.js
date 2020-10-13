import React, { useState, useEffect } from 'react';
import { Header, Filters, CountryList } from './components'
import { fetchAll } from './api/index'

function App() {

 
  const [ countries, setCountries ] = useState([]);
  const [ countriesFilter, setCountriesFilter ] = useState('');
  const [ regionFilter, setRegionFilter ] = useState('');
  const [ showCountryDetails, setShowCountryDetails ] =  useState();
  const [ darkMode, setDarkMode ] = useState(false);


  console.log(regionFilter);

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
    // console.log(event.target.value);
    setShowCountryDetails();
  }

  const handleRegionFilter = (region) => {
    setRegionFilter(region);
    setShowCountryDetails();
  }

  const onShowCountryDetails = (country) => {
    setCountriesFilter('');
    setShowCountryDetails(country);
  }

  const onHideCountryDetails = () => {
    setCountriesFilter('');
    setShowCountryDetails(); 
  }

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  }

  if (showCountryDetails) {
    return (
      <div className="App">
            <CountryList countries={countries} countryFilter={countriesFilter} regionFilter={regionFilter} showCountryDetails={showCountryDetails} onShowCountryDetails={onShowCountryDetails} onHideCountryDetails={onHideCountryDetails}/>
     </div>
    )
  }
  
  return (
    <div className="App">
     <Header theme={darkMode} handleThemeToggle={handleThemeToggle}/> 
     <Filters theme={darkMode} countriesFilter={countriesFilter} onCountryFilterChange={handleCountriesFilter} regionFilter={regionFilter} onRegionFilterChange={handleRegionFilter}/>
     <CountryList theme={darkMode} countries={countries} countryFilter={countriesFilter} regionFilter={regionFilter} showCountryDetails={showCountryDetails} onShowCountryDetails={onShowCountryDetails} onHideCountryDetails={onHideCountryDetails}/>
    </div>
  );
}

export default App;
