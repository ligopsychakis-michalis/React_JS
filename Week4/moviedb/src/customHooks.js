import {useState} from 'react';
import {API_KEY} from './config.js';

export function useGetMovies(){
  const [input, setInput] = useState(""); 
  const [movies, setMovies] = useState({});
  const [error, setError] = useState("");
  

  async function getMovies(e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});

    if (input){
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`;
      if (e.target.className == "pages") {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}&page=${parseInt(e.target.innerText)}`
      }

      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        await setMovies(data);

        if (data.results.length == 0){
          setError("No movies by that name..");
          setTimeout(() => setError(""), 2500);
        }; 

      }catch(e){
        console.error(e);
        if (movies && movies.results.length == 0){
          setError("No movies by that name...");
          setTimeout(() => setError(""), 2000);
        };
      }
    }
  };

  return [getMovies, setInput, setMovies, movies, error];
}


export function useGetDetails(){
  const [details, setDetails] = useState({});

  async function getDetails(e){
    const movieId = e.target.previousSibling.id;

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    const data = await res.json();
    setDetails(data);
  };

  return [details, getDetails];
}