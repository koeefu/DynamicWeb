import React from 'react';
import styles from './Bottom.module.css'

export default function Checklist(props) {
    const {activeButton, randomText, index, checkboxes, handleCheckboxChange} = props
    const categories = ['Watering', 'Fertilize', 'Pruning', 'Diseases']

    return (
        <div 
        className = {styles.checklist_frame}
        style={{ 
            display: activeButton === index ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch'
        }}
        >
            {Array(4).fill(null).map((_,checkboxIndex) => (
                <div key = {checkboxIndex} className = {styles.checklist}>
                    <div className = {styles.category_name}>
                        <h3>{categories[checkboxIndex]}</h3> 
                    </div>

                    <div className = {styles.check_detail}>  
                        <input 
                        type = "text" 
                        name = "detail" 
                        placeholder = {randomText}
                        />
                    </div>

                    <div>
                        <input 
                            type = "checkbox" 
                            name = "check" 
                            id="checkbox-18" 
                            checked = {checkboxes[index * 4 + checkboxIndex]}
                            onChange = {() => handleCheckboxChange(index, checkboxIndex)} />
                    </div>
                </div>
            ))}
        </div>
    )
}