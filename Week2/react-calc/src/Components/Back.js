import React from 'react';
import '../styles/ClearBack.scss';

export function Back (props){
    return(
        <div onClick={props.backHandler} className="clearBack">
            <i className="fas fa-backspace"></i>
        </div>
    );
};