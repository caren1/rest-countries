import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import './App.css';


import Header from './components/Header'
import Filters from './components/Filters'

import { getAll } from './api/index'
import CountryList from './components/CountryList';

function App() {

  const countryFilter = useSelector(state => state.filter)
  const countryRegion = useSelector(state => state.region)

  const [ countries, setCountries ] = useState([])
  const [ showCountryDetails, setShowCountryDetails ] = useState()

  const onShowCountryDetails = (country) => {
    setShowCountryDetails(country)
    console.log(showCountryDetails);
  }

  const onHideCountryDetails = () => {
    setShowCountryDetails()
  }

  useEffect(() => {
    async function getAllCountries () {
      const data = await getAll();
      if (data) {
        console.log(data);
        setCountries(data);
      }
    }
    getAllCountries();
  }, [])


  const filterByBoth = countries.filter((country) => {
      if (country.name.toLowerCase().includes(countryFilter) && country.region.toLowerCase().includes(countryRegion.toLowerCase())){
        return true;
      }
      return false;
  })

  if (!showCountryDetails) {
    return (
      <div className="app">   
        <Header />
        <Filters />
        <CountryList countries={filterByBoth} onShowCountryDetails={onShowCountryDetails} showCountryDetails={showCountryDetails} hideCountryDetails={onHideCountryDetails}/>
        {/* <DetailedCountry /> */}
        {/* { countries && <CountryCard country={countries[0]}/>} */}
      </div>
    );
  } else {
    return (
      <div className="app">   
      {/* <Header />
      <Filters /> */}
      <Header />
      <CountryList countries={filterByBoth} onShowCountryDetails={onShowCountryDetails} showCountryDetails={showCountryDetails} hideCountryDetails={onHideCountryDetails}/>
      {/* <DetailedCountry /> */}
      {/* { countries && <CountryCard country={countries[0]}/>} */}
    </div>
    )
  }

  // return (
  //   <div className="app">   
  //     <Header />
  //     <Filters />
  //     <CountryList countries={filterByBoth} onShowCountryDetails={onShowCountryDetails} showCountryDetails={showCountryDetails} hideCountryDetails={onHideCountryDetails}/>
  //     {/* <DetailedCountry /> */}
  //     {/* { countries && <CountryCard country={countries[0]}/>} */}
  //   </div>
  // );
}

export default App;
