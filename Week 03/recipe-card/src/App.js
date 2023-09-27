import React from 'react'
import RecipeCard from './RecipeCard'
import HeaderImg from './assets/header.png'
// import './header.css'
import {RECIPE_LIST} from './RecipeCard/recipe-data'

function App() {
  return (
    <div>
      <img src = {HeaderImg} style = {{ maxWidth: '100%' }} />
      {/* <h1>Keyi's Eggs Lab</h1> */}
      <div>
        {RECIPE_LIST.map((recipe, index) => (
          <RecipeCard recipe={recipe} key = {index}/>
        ))}
      </div>
    </div>
  )
}

export default App