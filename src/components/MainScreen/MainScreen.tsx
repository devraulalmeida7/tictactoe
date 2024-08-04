import styles from './style.module.css'
import mainTitle from '../../assets/title.svg'
import addIcon from '../../assets/add.svg'
import usersIcon from '../../assets/users.svg'
import React, { useState } from 'react'
 
export default function MainScreen() {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    }

    // let charInput = setInputValue.toString();
    // console.log(charInput.length)


    // if(charInput.length > 6) {

    // }

    return (
        <> 
          <main>
              <div style={{marginTop: "25px"}}>
                  <img src={mainTitle} alt="Tic Tac Toe logo" />
              </div>

              <h2>Enjoy with your friends</h2>

              <button 
              id='buttonCreateGame' 
              className={`${styles.buttonCreateGame}`}> 
                  <div>
                    <img src={addIcon} alt="Create a game (or a match)" />
                  </div> 
                Create a Game
                </button>

              <hr></hr>

              <p>OR</p>

              <hr></hr>

              <button 
              id= {styles.buttonJoinGame} 
              className={`${styles.buttonCreateGame }`}>
                  <div>
                    <img src={usersIcon} alt="Create a game (or a match)" />
                  </div> 
                Join game
                </button>


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