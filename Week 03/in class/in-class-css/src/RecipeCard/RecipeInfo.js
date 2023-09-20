import React from 'react'

export default function RecipeInfo(props) {
  const {title, description} = props
  return (
    <div className= {StyleSheet.recipe_info}>
      <h1 className= {StyleSheet.recipe_title}>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
