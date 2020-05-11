import React from 'react';
import '../styles/Search.scss';

export function Search(props){
    return (
        <form className="search">
            <i className="fas fa-search"></i><input type="text" placeholder="Search City" />
            <button type="submit" onClick={props.handleSearch}>Search</button>
        </form>
    );
};