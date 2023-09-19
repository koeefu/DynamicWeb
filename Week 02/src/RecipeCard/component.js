import React from "react"
import './styles.css'

export default function Component(props) {
    return <div className="component">{props.children}</div>
}