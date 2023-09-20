import React from "react";

export default function RecipeImg (props) {
    const {imgSrc} = props
    return(
        <div class = "imgContainer">
            <div class = "imgCrop">
                <img src = {imgSrc} alt = "Stir-fried Tomato and Scrambled Eggs"/>
            </div>
        </div>
    )
}