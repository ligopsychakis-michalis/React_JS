import React from 'react';

export function Delete({handleDelete}){
    return <i onClick={handleDelete} className="far fa-times-circle fa-2x"></i>;
};