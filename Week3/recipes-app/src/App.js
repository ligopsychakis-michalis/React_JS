import React, {useState} from 'react';
import {Search} from './Components/Search';
import {Recipe} from './Components/Recipe';
import {Error} from './Components/Error';
import './Styles/App.scss';

const appId = "55b7a87e";
const appKey = "71dc3d59240e5cb5fb75c75b20b8afca";


function App() {
  const [recipes, setRecipes] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");


  async function getRecipes(e){
    e.preventDefault();
    const res = await fetch(`https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${appKey}`);
    const data = await res.json();
    if(data.hits.length == 0){
      setError("No food by that name..");
      return;
    }
    setError("");
    setRecipes(data.hits);
    setInput("");
  };


  return (
    <div className="app">
      <Search 
        input={input} 
        handleInputChange={()=> setInput(document.querySelector("input").value)} 
        getRecipes={getRecipes}
      />
      <div className="recipes">
        {recipes ? recipes.map((recipe,index) => <Recipe key={index} recipe={recipe} />) : ""}
      </div>
      <Error msg={error} />
    </div>
  );
}

export default App;

