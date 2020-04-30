import React from 'react';
import './styles/App.scss';
import {CountryCard} from './components/CountryCard';
const weatherJson = require('./city-weather.json');


function App() {
  const weatherList = weatherJson.map((country, index) => <CountryCard index = {index} key = {index}/>);

  return (
    <div className="app">
      <h1>Weather</h1>
      {weatherList}
    </div>
  );
}

export default App;
