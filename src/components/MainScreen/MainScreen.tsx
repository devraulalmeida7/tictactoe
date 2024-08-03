import styles from './style.module.css'
import image from '../../assets/title.svg'
import React, { useId, useState } from 'react'


// interface ButtonProps {
//     color?: string 
//     bgColor?: string
// }  
export default function MainScreen() {

    const buttonJoin = document.getElementById('buttonJoinGame')

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    }
    let charInput = setInputValue.toString();

    if(charInput.length >=6) {
        
    }

    return (
        <> 
          <main>
              <div style={{marginTop: "25px"}}>
                  <img src={image} alt="Tic Tac Toe logo" />
              </div>

              <h2>Enjoy with your friends</h2>

              <button id='buttonCreateGame' className={`${styles.buttonCreateGame}`}>Create a Game</button>

              <hr></hr>

              <p>OR</p>

              <hr></hr>

              <button id= {styles.buttonJoinGame} style={{}} className={`${styles.buttonCreateGame }`}>Join game</button>


              <input 
              id='inputTypeCode' 
              className={styles.inputTypeCode} 
              type="text" 
              placeholder='  Type the invite code ' 
              value={inputValue} 
              onChange={handleInputChange} />

            

            
          </main>
        </>
    )
}