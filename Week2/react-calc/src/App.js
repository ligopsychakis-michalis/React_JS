import React, {useState} from 'react';
import {buttons} from './buttons';
import './styles/App.scss';
import {Button} from './Components/Button';
import {Input} from './Components/Input';
import {Back} from './Components/Back';
import {Clear} from './Components/Clear';
import {evaluate} from 'mathjs';
let btns = buttons;
let canDot = true;


export default function App() {
  const [input, setInput] = useState("");  
  
  function clickHandler(e){
    if(e.target.innerHTML == input[input.length-1] && isNaN(e.target.innerHTML)){
      return;
    }else if (e.target.innerHTML == "="){
      setInput(evaluate(input).toString());
    }else if (e.target.innerHTML == "." && canDot == false){
      return;
    }else{
      setInput(input + e.target.innerHTML);
      if (e.target.innerHTML == "/" || e.target.innerHTML == "*" || e.target.innerHTML == "+" || e.target.innerHTML == "+"){
        canDot = true;
      }else if(e.target.innerHTML == "."){
        canDot = false;
        console.log(canDot);
      }
    }

    return;
  }

  function clearHandler(){
    setInput("");
    return;
  }

  function backHandler(){
    setInput(input.slice(0, input.length-1));
    return;
  }

  
  return (
    <div className="App">
      <Input input={input}/>
      {btns.map((btn,index) => <Button clickHandler={clickHandler} key={index} class={btn.class} content={btn.content}/>)}
      <Clear clearHandler={clearHandler}/>
      <Back backHandler={backHandler} />
    </div>
  );
}


