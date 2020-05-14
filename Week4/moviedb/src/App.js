import React, {useState,useEffect} from 'react';
import './styles/App.scss';
import Nav from './components/Nav';
import Search from './components/Search';
import Movie from './components/Movie';
import Error from './components/Error';
import Pagination from './components/Pagination';
import Details from './components/Details';
import {useGetMovies, useGetDetails} from './customHooks';
import { Route } from "react-router-dom";
import {API_KEY} from './config.js';


function App() {
  const [getMovies, setInput, setMovies, movies, error] = useGetMovies();
  const [details, getDetails] = useGetDetails();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        data.total_pages = 1;
        setMovies(data);
      });
  },[]);

  
  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <Search getMovies={getMovies} handleInput={e => setInput(e.target.value)} />
        <div className="moviesContainer">
          {Object.keys(movies).length ? movies.results.map((movie,i) => <Movie getDetails={getDetails} key={i} infos={movie} />) : <></>}
        </div>
        <Error msg={error} />
        {Object.keys(movies).length ? <Pagination pages={movies.total_pages} changePage={getMovies}/> : <></>}
      </Route>

      <Route exact path={"/details"}>
        <Details details={details} />
      </Route>
    </div>
  );
};

export default App;

