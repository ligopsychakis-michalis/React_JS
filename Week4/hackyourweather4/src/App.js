import React, {useState} from 'react';
import './styles/App.scss';
import {CountryCard} from './components/CountryCard';
import {Search} from './components/Search';
import {Error} from './components/Error';
import {Details} from './components/Details';
import {useGetCountries} from './customHook';
import {BrowserRouter,Switch,Route} from "react-router-dom";
require('dotenv').config()


function App() {
  const [handleSearch ,countriesInfo, setCountriesInfo, error] = useGetCountries();

  return (
    <BrowserRouter>

      <Switch>
        <Route path="/:cityId">
          <Details />
        </Route>

        <Route path="/">
          <div className="app">
            <h1>Weather</h1>
            <Search handleSearch={handleSearch} />
            <Error error={error} />
            {countriesInfo.map((countryInfo,index) => { 
              return(
                <CountryCard 
                  key={index} 
                  setCountriesInfo={setCountriesInfo} 
                  countriesInfo={countriesInfo} 
                  countryInfo={countryInfo}
                />
              )})}
          </div>
        </Route>  
      </Switch>  

    </BrowserRouter>  
  );
}

export default App;



