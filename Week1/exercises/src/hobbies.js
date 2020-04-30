import React from 'react';
import ReactDOM from 'react-dom';

export class HobbyList extends React.Component{
    constructor(){
        super();
        this.state = {hobbies: ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"]};
    }

    render(){
        let hobs = this.state.hobbies;
        hobs = hobs.map(hobby => <li>{hobby}</li>);
        return <ul>{hobs}</ul>;
    }
}
