import React from 'react'
import {RECIPE} from './recipe-data'
import RecipeInfo from './recipeinfo'
import RecipeImg from './recipeimg'
import IngredientsList from './ingre_lis'
import InstructionsList from './instru_lis'
import Card from './card.js'
import Left from './left.js'
import Component from './component.js'
import './styles.css'

export default function RecipeCard() {
    return (
        <Card>
            {/* <RecipeImg/> */}
            <RecipeImg imgSrc = {RECIPE.imgSrc}/>

            <Left>
                {/* <RecipeInfo/> */}
                <RecipeInfo title = {RECIPE.title} description = {RECIPE.description}/>

                <Component>
                    {/* <Ingredients/> */}
                    <IngredientsList ingredients = {RECIPE.ingredients}/>
                    {/* <Instructions/> */}
                    <InstructionsList instructions = {RECIPE.instructions}/>
                </Component>
            </Left>
        </Card>
    )
}