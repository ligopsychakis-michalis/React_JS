import React from 'react';
import '../Styles/Error.scss';

export function Error (props){
    if (!props.msg){
        return <></>;
    }
    return (
        <div className="error">
            <p>{props.msg}</p>
        </div>
    )
};