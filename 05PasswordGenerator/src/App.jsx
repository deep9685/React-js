import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*(){}[]";

    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed])

  return (
    <>
      <div className='bg-gray-700 w-max p-5 rounded-md flex flex-col'>
        <h1 className='text-4xl text-white mb-3'>Password Generator</h1>
        <div className='flex mb-3'>
          <input className='outline-none p-2 text-3xl rounded-s-xl'
            type='text'
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          className='bg-blue-500 text-white p-2 text-3xl rounded-e-xl'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>

        <div className='flex gap-2 items-center'>
          <input type='range'
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label className='text-xl text-orange-500'>Length ({length})</label>
          
          <input type='checkbox' id='number' 
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor='number' className='text-xl text-orange-500'>Numbers</label>

          <input type='checkbox' id='character' 
            defaultChecked={characterAllowed}
            onChange={() => setCharacterAllowed(prev => !prev)}
          />
          <label htmlFor='character' className='text-xl text-orange-500'>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
