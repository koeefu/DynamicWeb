import React from 'react'
import styles from './Title.module.css'

export default function Title() {
    function onChangeEvent(event){
        console.log("on change");
        console.log(event.target.value);
    }
    return (
        <div className = {styles.title}> 
            <label>
                <input 
                onChange={onChangeEvent}
                type = "text" 
                name="my-input" 
                placeholder = "Put name here!"
                />
            </label>
        </div>
    )
}