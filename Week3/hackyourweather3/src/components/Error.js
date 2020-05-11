import React from 'react';
import '../styles/Error.scss';

export function Error({error}){
    if (error){
        return <p className = "error">{error}</p>;
    }else return <></>;
};