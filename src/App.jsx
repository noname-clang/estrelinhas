import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from '../data.json' 
function App() {
  let value = 0; 
  return (
    <>
    <div className='main'>
        <div className='Div1'>
          <h2>Your Result</h2>
          {data.map((elemento) => {
            value = value + elemento.score ;
            
          })}
          <div className='circlewithscore'><h1>{(value / data.length).toFixed()}</h1> <h4>of 100</h4></div>
          <h3>Great</h3>
          <h4>You scored higher than 65% of the people who have taken these tests.</h4>
        </div>
        
        <div className='CMain'>
        <h2 id='sumary'>Summary</h2>
            {data.map((elemento) => 
             <div style={{backgroundColor : elemento.color} } className="classcategory">
              <h5>{elemento.category}</h5>
              
              </div>
            )}
             <input type="button" value="Continue" />
            </div>
           
        </div>
    </>
  )
}

export default App
