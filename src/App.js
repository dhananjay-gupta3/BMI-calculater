
import { useState } from 'react';
import './App.css';
import './index.css'

function App() {
  const [weight,setWeight] = useState()
  const [height,setHeight] = useState()
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')

  let calcBmi = (event)=>{
    event.preventDefault()

    if (weight === 0 || height === 0){
      alert("Please enter avalid weight and height")
    }else{
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
      console.log(bmi)
    //logic
    if (bmi < 25){
      setMessage("You are underweight")
    }else if (bmi >= 25 && bmi < 30 ){
      setMessage("You are a healthy weight")
    }else{
      setMessage("You are overweight")
    }


    }
  }
let imgSrc;

  if (bmi < 1){
    imgSrc = null
  }else{
    if (bmi < 25) {
      imgSrc = require('../src/Assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/Assets/healthy.png')
    }else{
      imgSrc = require('../src/Assets/overweight.png')
    }

  }





  let reload = ()=>{
    window.location.reload()

  }


  return (
    <div className="App">
    <div className="container">
    <h2 className="centre">
    BMI Calculater
    </h2>
    <form onSubmit={calcBmi}>
    <div>
    <label className='weight'>Weight (lbs)</label>
    <input value={weight}
    onChange={(event)=> setWeight (event.target.value)}/>
    </div>
    <div>
    <label>Height (in)</label>
    <input value={height}
    onChange={(event)=> setHeight (event.target.value)}/>
    </div>
    <div>
    <button className='btn' type='submit'>Submit</button>
    <button className='btn btn-outline'
    onClick={reload}
    type='submit'>Reload</button>
    </div>
    </form>

    <div>
    <h3>Your BMI is: {bmi}</h3>
    <p>{message}</p>
    </div>

    <div className='img'>
    <img src={imgSrc} alt=''></img>
    
    </div>
    </div>
      
      
    </div>
  );
}

export default App;
