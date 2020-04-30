import React from 'react';
import '../styles/CountryCard.scss';
const weatherJson = require('../city-weather.json');


export class CountryCard extends React.Component{
    constructor(){
        super();
        this.state = {
            weatherAPI: null
        }
    }

    componentDidMount(){
        this.setState({ weatherAPI: weatherJson });
    }


    render(){
        if (this.state.weatherAPI !== null){
            const { weatherAPI } = this.state;
            const { index: i } = this.props;

            return(
                <div className = "countryCard">
                    <h1>{weatherAPI[i].name}, {weatherAPI[i].sys.country}</h1>
                    <h2>{weatherAPI[i].weather[0].main}</h2>
                    <p>{weatherAPI[i].weather[0].description}</p>
                    <p>min temp: {weatherAPI[i].main.temp_min}</p>
                    <p>max temp: {weatherAPI[i].main.temp_max}</p>
                    <p>location: {weatherAPI[i].coord.lat}, {weatherAPI[i].coord.lon}</p>
                </div>
            );
        }
        return "";
    }
}