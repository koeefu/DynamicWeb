import React from "react"
import styles from './RecipeCard.module.css'

//all class in vscode must be className
export default function Card(props) {
    return <div className={styles.card}>{props.children}</div>
}
