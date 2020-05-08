import React from 'react';
import '../Styles/Search.scss';

export function Search(props){
    return (
        <form type="submit">
            <input 
                placeholder="Type any food!!" 
                value={props.input} 
                onChange={props.handleInputChange} 
            />
            <button onClick={props.getRecipes}>Get Recipes!</button>
        </form>
    );
};