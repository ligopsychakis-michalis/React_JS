import React, {useState, useEffect} from 'react';

export function RandomJoke(){
    const [joke, setJoke] = useState(null);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(res => res.json())
            .then(data => {
                setJoke(data);
            })
            .catch(err => setMsg(err.message));
    });
    
    return (
        <Joke joke={joke} msg={msg}/>
    );
};

function Joke({joke,msg}){
    if (joke){
        return (
            <div>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
            </div>
        );
    }else return <p>{msg}</p>;
};