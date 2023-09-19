import React from "react";

export default function IngredientsList (props) {
    const {ingredients} = props

    return (
        <div id = "ingre">
            <div class = "headFrame"><h2>Ingredients</h2></div>
            <div id = "ingreLi">
                <ul>
                    {ingredients.map((i, index) => (
                        <li key = {index}>{i}</li>
                    ))}
                </ul>
            </div>
        </div>

    )
}