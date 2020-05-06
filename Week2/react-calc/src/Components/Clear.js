import React from 'react';
import '../styles/ClearBack.scss';

export function Clear(props){
    return <div onClick={props.clearHandler} className="clearBack">Clear</div>;
}