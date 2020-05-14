import React from 'react';
import '../styles/Search.scss';

export default function Search(props){
    return(
        <form onSubmit={props.getMovies}>
            <input onChange={props.handleInput} placeholder="Find some movies.." />
        </form> 
    );
};  
