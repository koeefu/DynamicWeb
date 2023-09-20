import React from 'react'

export default function RecipeInfo (props) {
    const {title, description} = props
    return (
        <div>
            <div id = "titleFrame"><h1>{title}</h1></div>
            <div id = "desFrame"><p>{description}</p></div>
        </div>
    )
}