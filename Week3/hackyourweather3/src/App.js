import React from 'react';
import './styles/App.scss';
import {CountryCard} from './components/CountryCard';
import {Search} from './components/Search';
import {Error} from './components/Error';
import {useGetCountries} from './customHook';
require('dotenv').config()


function App() {
  const [handleSearch ,countriesInfo, setCountriesInfo, error] = useGetCountries();

  return (
    <div className="app">
      <h1>Weather</h1>
      <Search handleSearch={handleSearch} />
      <Error error={error} />
      {countriesInfo.map((countryInfo,index) => <CountryCard key={index} setCountriesInfo={setCountriesInfo} countriesInfo={countriesInfo} countryInfo={countryInfo}/>)}
    </div>
  );
}

export default App;



