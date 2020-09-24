import React from 'react';
import './App.css';

import Header from './components/Header'
import Filters from './components/Filters'
import CountryCard from './components/CountryCard'

function App() {
  return (
    <div className="app">
      <Header />
      <Filters />
      <div className="countries">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      </div>
      
    </div>
  );
}

export default App;
