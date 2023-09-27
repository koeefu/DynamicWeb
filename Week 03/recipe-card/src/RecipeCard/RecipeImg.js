import React from 'react';
import styles from './RecipeCard.module.css'

export default function RecipeImg (props) {
    return(
        <img 
            src = {props.imgSrc} 
            alt = "Stir-fried Tomato and Scrambled Eggs"
            className= {styles.recipe_img}
        />
    )
}