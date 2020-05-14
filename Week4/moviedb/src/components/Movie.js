import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Movie.scss';


export default function Movie({infos, getDetails}){
    return (
        <div className="movieCard">
            <img id={infos.id} src={`https://image.tmdb.org/t/p/w300/${infos.poster_path}`} alt={infos.original_title}/>
            <Link onClick={getDetails} to={`/details?movie=${infos.original_title}`}>Show details...</Link>
        </div>
    );
};