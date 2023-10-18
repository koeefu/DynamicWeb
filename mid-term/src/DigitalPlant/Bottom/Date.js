import React from 'react'
// import styles from './Bottom.module.css'

export default function Date(props) {
    const {value, activeButton, handleButtonClick, index} = props
    return (
        <button 
        onClick = {handleButtonClick}
        style= {{
            color: activeButton === index ? 'gray' : '#9FCB40',
            }}
        >
            {value}
        </button>
    )
}