import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import Header from './components/Header'
import Filters from './components/Filters'
import CountryCard from './components/CountryCard'

import { getAll } from './api/index'
import CountryList from './components/CountryList';
import DetailedCountry from './components/DetailedCountry';

function App() {

  const countryFilter = useSelector(state => state.filter)
  const countryRegion = useSelector(state => state.region)

  const [ countries, setCountries ] = useState([])

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
      if (country.name.toLowerCase().includes(countryFilter) && country.region.toLowerCase().includes(countryRegion.toLowerCase()))
        return true;
      
  })

  return (
    <div className="app">
      <Header />
      <Filters />
      <CountryList countries={filterByBoth} />
      {/* <DetailedCountry /> */}
      {/* { countries && <CountryCard country={countries[0]}/>} */}
      
      
    </div>
  );
}

export default App;
