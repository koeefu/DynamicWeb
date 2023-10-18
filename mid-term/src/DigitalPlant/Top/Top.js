import React from 'react'
import styles from './Top.module.css'

function PlantInfo(props) {
    const {info} = props
    return (
        <div>
            <h3 className = {styles.info}>
                {info}
            </h3>
            <div className = {styles.info_input}>
                <input type = "text" name="basic-info" placeholder = "Type here"/>
            </div>
        </div>
    )
}

export default function Top() {
    return (
      <div className = {styles.top}>
        <div className = {styles.acquDate}>
          <PlantInfo info = {"Acquisition Date"}/>
        </div>
      
        <div className = {styles.light}>
          <PlantInfo info = {"Light"}/>
        </div>

        <div className = {styles.memo}>
          <PlantInfo info = {"Memo"}/>
        </div>
      </div>
    )
}