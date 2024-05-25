import { useEffect } from 'react';
import { useRef } from 'react';
import { useState, useCallback} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password, setPassword] = useState("")
  
const passwordRef =useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*(){}";
    
    for(let i=1;i<= length;i++){
       let char = Math.floor(Math.random()*str.length +1);
       pass +=str.charAt(char);

    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])
  // used to optimize the code

  const copyPasswordtoClipboard = useCallback(()=>{
    //optional value
    passwordRef.current?.select();//select all data
    // select password data with range
    passwordRef.current?.setSelectionRange(0,100); 
    window.navigator.clipboard.writeText(password);
  },
  [password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator]
  )
// is to run again if any change in dependency
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
   <input
       type="text" 
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       ref={passwordRef}
      />
    <button
    onClick={copyPasswordtoClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>   
     </div>
     <div
      className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id=""
           />
           <label >Length:{length}</label>
       </div>

       <div className='flex items-center gap-x-1'>
        <input type="checkbox" name="" 
        id="numberInput" 
        defaultChecked={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev)=> !prev);
        }}
        />
        <label htmlFor="Numbernput">Numbers</label>
       
       </div>
       <div className='flex items-center gap-x-1'>
        <input type="checkbox" name="" 
        id="characterInput" 
        defaultChecked={numberAllowed}
        onChange={()=>{
          setCharAllowed((prev)=> !prev);
        }}
        />
        <label htmlFor="Characternput">Characters</label>
       </div>
       </div>
     </div>
     </>
  )
}

export default App
