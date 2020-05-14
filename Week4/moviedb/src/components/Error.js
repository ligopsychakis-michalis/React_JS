import React from 'react';
import '../styles/Error.scss';

export default function Error({msg}){
    if(msg){
        return (
            <div className="error">
                <p>{msg}</p>
            </div>
        );  
    }else{
        return <></>;
    }  
};