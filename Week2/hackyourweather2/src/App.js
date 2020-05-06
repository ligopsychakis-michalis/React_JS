import React, {useState} from 'react';
import './styles/App.scss';
import {CountryCard} from './components/CountryCard';
import {Search} from './components/Search';
const weatherJson = require('./city-weather.json');
require('dotenv').config()


function App() {
  const weatherList = weatherJson.map((country, index) => <CountryCard index = {index} key = {index}/>);
  const [countryInfo, setCountryInfo] = useState(null);

  async function handleSearch(e){
    e.preventDefault();
    const city = e.target.previousSibling.value;
    e.target.previousSibling.value = "";

    try{
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
        const data = await res.json();
        if(data.cod != 200){
          throw new Error("No country by that name..");
        }else{
          setCountryInfo(data);
        }
      }catch(e){
      setCountryInfo(e.message);
    };

  };

  
  return (
    <div className="app">
      <h1>Weather</h1>
      <Search handleSearch={handleSearch} />
      <CountryCard countryInfo={countryInfo}/>
    </div>
  );
}

export default App;



