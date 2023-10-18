import React from 'react';
import styles from './RecipeCard.module.css'

export default function RecipeImg (props) {
    console.log(props.imgSrc);
    return(
            // <img 
            // src = {props.imgSrc} 
            // alt = "Stir-fried Tomato and Scrambled Eggs"
            // className= {styles.recipe_img}
            // />
            <div 
                className={styles.img_holder}
                style={{
                    // ${} <- store any kind of virable
                    backgroundImage: `url(${props.imgSrc})`,
                    // backgroundImage: "url("+ props.imgSrc +")",
                }}
                // background-image -> backgroundImage
            >
            </div>
        )
}