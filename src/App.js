import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import Filters from './components/Filters'
import CountryCard from './components/CountryCard'

import { getAll } from './api/index'

function App() {


  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    setCountries(getAll());
  }, []);

  return (
    <div className="app">
      <Header />
      <Filters />
      <div className="countries">
      
      {/* <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard /> */}
      </div>
      
    </div>
  );
}

export default App;
