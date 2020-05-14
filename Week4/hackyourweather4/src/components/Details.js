import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Details.scss';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip
} from "recharts";


export function Details(){
    const [forecast, setForecast] = useState({});
    const [cityCountry, setCityCountry] = useState("");
    const API_KEY =  process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const cityId = window.location.pathname.slice(2, window.location.pathname.length);
    let cityName = "";

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCityCountry(`${data.city.name}, ${data.city.country}`);
                return (
                    data.list.map(info => {
                        return {x:info.dt_txt.slice(0,16), y:Math.round(info.main.temp - 272.15)};
                    })
                );
            })
            .then(forecastData => setForecast(forecastData));
    }, []);

    return (
        <div className="details">
            <Link to="/"><button>Back</button></Link>
            <div>
                <h1>{cityCountry}</h1>
                <ScatterChart
                    width={1000}
                    height={400}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    <CartesianGrid />
                    <XAxis dataKey={"x"} dataKey="x" name="date-time" fontFamily="sans-serif"/>
                    <YAxis type="number" dataKey={"y"} name="temp" unit="C" />
                    <ZAxis range={[100]} />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter data={forecast} fill="#8884d8" line />
                </ScatterChart>
            </div>
        </div>    
    );
};  