import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import Filters from './components/Filters'
import CountryCard from './components/CountryCard'

import { getAll } from './api/index'
import CountryList from './components/CountryList';
import DetailedCountry from './components/DetailedCountry';

function App() {


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

  return (
    <div className="app">
      <Header />
      <Filters />
      <CountryList countries={countries} />
      {/* <DetailedCountry /> */}
      {/* { countries && <CountryCard country={countries[0]}/>} */}
      
      
    </div>
  );
}

export default App;
