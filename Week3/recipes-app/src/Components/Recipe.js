import React from 'react';
import '../Styles/Recipe.scss';

export function Recipe({recipe:{recipe}}){
    return (
        <div className="recipe">
            <h1>{recipe.label}</h1>
            <img src={recipe.image} alt={recipe.label}/>
            <section className="healthLabels">
                <h3>Health Labels</h3>
                <ul>
                    {recipe.healthLabels.map((label,index) => <li key={index}>{label}</li>)}
                </ul>
            </section>
            <section className="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    {recipe.ingredientLines.map((ingredient,index) => <li key={index}>{ingredient}</li>)}
                </ul>
            </section>
            <section className="moreInfos">
                <p>Calories: {recipe.calories.toFixed(2)}kcal</p>
                <a href={recipe.shareAs} target="_blank">Instructions Here..</a>
            </section>
        </div>
    );
};