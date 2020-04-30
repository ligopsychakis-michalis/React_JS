import React from 'react';
import ReactDOM from 'react-dom';

export class Counter extends React.Component{
    constructor(){
        super();
        this.state = { count:0 };
        this.setCount = this.setCount.bind(this);
    }

    setCount(){
        const {count} = this.state;
        this.setState({ count: count + 1});
    }

    render(){
        let feedback;
        if (this.state.count > 10){
            feedback = "It's higher than 10!";
        }else{
            feedback = "Keep counting...";
        }

        return(
            <div>
                <Count count={this.state.count} />
                <Button clickHandler = {this.setCount} />
                <br/>
                <p>{feedback}</p>
            </div>
        );
    }
}

class Count extends React.Component{
    render(){
        return <h1>Count is: {this.props.count}</h1>;
    }
}

class Button extends React.Component{
    render(){
        return <button onClick={this.props.clickHandler}>Add 1!</button>;
    }
}