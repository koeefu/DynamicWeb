import React from 'react'
// HW: Apply CSS styling
export default function IngredientsList(props) {
  const {ingredients} = props

  return (
    <div className={styles.ingredients_list}>
      <h3 className={styles.list_title}>Ingredients</h3>
      <ul>
        {ingredients.map((ingred, index) => (
          <li key={index} className={styles.list_item}>{ingred}</li>
          
        ))}
      </ul>
    </div>
  )
}
