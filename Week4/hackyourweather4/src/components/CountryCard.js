import React from 'react';
import {Delete} from './Delete';
import {Link} from "react-router-dom";
import '../styles/CountryCard.scss';


export function CountryCard({countryInfo,countriesInfo, setCountriesInfo,handleClick}){

    function handleDelete(e){
        const nodeToRemove =  e.target.parentNode.parentNode;
        const newCountries = countriesInfo.filter(countryInfo => countryInfo.name != nodeToRemove.id);
        setCountriesInfo(newCountries);
    };

    if (countryInfo){
        if (countryInfo.cod == 200){
            return(
                <div id={countryInfo.name} className = "countryCard">
                    <div className="head">
                        <h1><Link to={`/:${countryInfo.id}`}>{countryInfo.name}</Link>, {countryInfo.sys.country}</h1>
                        <Delete handleDelete={handleDelete} />
                    </div>
                    <h2>{countryInfo.weather[0].main}</h2>
                    <p>{countryInfo.weather[0].description}</p>
                    <p>min temp: {(countryInfo.main.temp_min - 273.15).toFixed(2)} C</p>
                    <p>max temp: {(countryInfo.main.temp_max - 273.15).toFixed(2)} C</p>
                    <p>location: {countryInfo.coord.lat}, {countryInfo.coord.lon}</p>
                </div>
            );  
        }else return <></>;    
    }else return <></>;
};