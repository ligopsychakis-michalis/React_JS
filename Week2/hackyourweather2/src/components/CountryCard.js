import React from 'react';
import '../styles/CountryCard.scss';
const weatherJson = require('../city-weather.json');


export function CountryCard({countryInfo}){
    if (countryInfo !== null){
        if (countryInfo.cod == 200){
            return(
                <div className = "countryCard">
                    <h1>{countryInfo.name}, {countryInfo.sys.country}</h1>
                    <h2>{countryInfo.weather[0].main}</h2>
                    <p>{countryInfo.weather[0].description}</p>
                    <p>min temp: {(countryInfo.main.temp_min - 273.15).toFixed(2)} C</p>
                    <p>max temp: {(countryInfo.main.temp_max - 273.15).toFixed(2)} C</p>
                    <p>location: {countryInfo.coord.lat}, {countryInfo.coord.lon}</p>
                </div>
            );
        }else{
            return <p className = "countryCard">{countryInfo}</p>;
        };    
    }else return "";
};