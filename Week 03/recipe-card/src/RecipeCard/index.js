import React from 'react'
import RecipeInfo from './RecipeInfo'
import RecipeImg from './RecipeImg'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import Card from './Card'
import styles from './RecipeCard.module.css'
import UserRating from './UserRating'
// import {RECIPE} from './recipe-data'

export default function RecipeCard (props) {
    const recipe = props.recipe

    return (
            <Card>
            <div className = {styles.upper}>
                <RecipeImg imgSrc={recipe.imgSrc} />
                <div className={styles.recipe_wrapper}> 
                    {/* <RecipeImg imgSrc={recipe.imgSrc} /> */}
                    <RecipeInfo title={recipe.title} description={recipe.description} /> 
                    <div className={styles.recipe_details}>
                        <IngredientsList ingredients={recipe.ingredients} />
                        <InstructionsList instructions={recipe.instructions} />
                    </div> 
                </div>
            </div>
            <UserRating />
            </Card>
    )
}