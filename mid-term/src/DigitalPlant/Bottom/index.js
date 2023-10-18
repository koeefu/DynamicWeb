import React, {useState} from 'react'
import styles from './Bottom.module.css'
import Date from './Date'
import Checklist from './Checklist'


// all the info about the bottom part of my page
export default function Bottom() {
    const [activeButton, setActiveButton]= useState(null);
    const [checkboxes, setCheckboxes] = useState(Array(16).fill(false))
   
    const checklistItems = ['08', '09', '10', '11', '12'];

    function handleCheckboxChange(index, checkboxIndex) {
        const newCheckboxes = [...checkboxes]
        newCheckboxes[index * 4 + checkboxIndex] = !newCheckboxes[index * 4 + checkboxIndex]
        setCheckboxes(newCheckboxes)
    }

    function handleButtonClick(index) {
        setActiveButton(index)
    }

    return (
        <div className = {styles.bottom}>
            <div className = {styles.caring}>
                {/* date */}
                <div className ={styles.date}>
                        {checklistItems.map((item, index) => (
                            <Date 
                            index = {index}
                            activeButton = {activeButton}
                            handleButtonClick = {()=>handleButtonClick(index)}
                            value = {item}
                            />
                        ))} 
                </div>
                
                {/* checklist */}
                <>
                    {Array(5).fill(null).map((item, index) => (
                    <Checklist 
                        randomText="Type here"
                        activeButton = {activeButton}
                        checkboxes={checkboxes}
                        handleCheckboxChange = {handleCheckboxChange}
                        index = {index}
                    />
                    ))}
                </>  
            </div> 

   
            <div className = {styles.img}>
                <div className = {styles.img_inner}>
                    <img 
                    className = {styles.plant_img} 
                    src={require('./assets/flower.png')}
                    alt = "flower"/>
                </div>
            </div>
        </div>
    )
}