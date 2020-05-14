import {useState} from 'react';

export function useGetCountries(){
    const [countriesInfo, setCountriesInfo] = useState([]);
    const [error, setError] = useState(null);

    async function handleSearch(e){
        e.preventDefault();
        const city = e.target.previousSibling.value;
        e.target.previousSibling.value = "";

        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
            const data = await res.json();
            if(data.cod != 200){
            throw new Error();
            }else{
            setCountriesInfo([...countriesInfo, data]);
            }
        }catch(e){
        setError("No country by that name..");
        setTimeout(() => setError(null),2000);
        };
    };

    return [handleSearch, countriesInfo, setCountriesInfo, error];
}