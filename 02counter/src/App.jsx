import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter=5;
 let [counter,setCounter]=useState(15);
 const addValue = () =>{
  counter+=1;
  console.log("CLicked",counter);
  setCounter(counter);
 }

 const removeValue=() =>{
  setCounter(counter-1);
 }
  return (
    <>
     <h1>Chai Aur React{addValue}</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>add value{counter}</button>
     <br />
     <button onClick={removeValue}>remove value{counter}</button>

    </>
  )
}

export default App
