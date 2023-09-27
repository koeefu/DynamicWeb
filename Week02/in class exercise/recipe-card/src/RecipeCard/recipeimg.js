import React from "react";

export default function RecipeImg (props) {
    const {imgSrc} = props
    return(
        <div className = "imgContainer">
            <div className = "imgCrop">
                <img src = {imgSrc} alt = "Stir-fried Tomato and Scrambled Eggs"/>
            </div>
        </div>
    )
}