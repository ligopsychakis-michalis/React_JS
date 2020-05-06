import React from 'react';
import '../styles/Button.scss';

export function Button (props){
    return(
        <div onClick={props.clickHandler} className={props.class}>
            {props.content}
        </div>
    );
}