import React from 'react';
import '../styles/Details.scss';

export default function Details({details}){
    return (
        <div className="details">
            <button onClick={() => window.history.back()}>
                <i className="fas fa-long-arrow-alt-left"></i>
            </button>
            <div className="infosContainer">
                <figure>
                    <img src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`} alt="poster" />
                    <img src={`https://image.tmdb.org/t/p/w300/${details.backdrop_path}`} alt="backdrop" />
                </figure>
                <div className="infos">
                    <h1>{details.original_title}</h1>
                    <p>{details.overview}</p>
                    <br/>
                    <p>Language: {details.original_language}</p>
                    <p>Runtime: {details.runtime} mins</p>
                    <p>Released date: {details.release_date}</p>
                    <p>Rate: <strong>{details.vote_average}</strong> / 10</p>
                </div>
            </div>
        </div>
    );
};