import style from './style.module.css'
import image from '../../assets/title.svg'
import React from 'react'


// interface ButtonProps {
//     color?: string 
//     bgColor?: string
// }  
export default function MainScreen() {

    const inputTypeCode = document.getElementById('inputTypeCode');
    if(inputTypeCode) {

    }
    interface count{
        inputTypeCodeValue: string
    }


    return (
        <> 
          <main>
              <div style={{marginTop: "25px"}}>
                  <img src={image} alt="Tic Tac Toe logo" />
              </div>

              <h2>Enjoy with your friends</h2>

              <button id='buttonCreateGame' className={`${style.buttonCreateGame}`}>Create a Game</button>

              <hr></hr>

              <p>OR</p>

              <hr></hr>


              <input id='inputTypeCode' className={style.inputTypeCode} type="text" placeholder='  Type the invite code ' />

            

            
          </main>
        </>
    )
}