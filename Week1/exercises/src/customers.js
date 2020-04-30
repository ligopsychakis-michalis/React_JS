import React from 'react';
import ReactDOM from 'react-dom';


export class Guarantee extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.img} width = {100} />
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

//default props to Guarantee
Guarantee.defaultProps = {
    description: "Hljasdof asdhfaolsdhf hajsdkhfoah aoyhfiuakhds jkalsyfia kalsjdyhiah ahlksdf"
}


