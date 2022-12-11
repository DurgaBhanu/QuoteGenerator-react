import React from 'react'
import {useEffect, useState} from 'react'
import './App.css'



function App() {
  URL='https://api.adviceslip.com/advice'
  const [advice,setAdvice]=useState('')

  const getAdvice = async() =>{
  
      const response = await fetch(`${URL}`)
      const data = await response.json()
      setAdvice(data.slip.advice)
    
  }

 useEffect(() => {
   getAdvice()
 },[])

  return (
    <div className='App'>
      <div className='box'>
        <h1 className='quote'>{advice}</h1>
        <button className='button' onClick={getAdvice}>
          <span>Get advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
