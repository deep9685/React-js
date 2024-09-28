import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const increaseValue = () => {
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // this will only increase value one time becase useState set state in batches and it consider a one batch. so the way to do is bellow.
    setCount(prevCount => prevCount+1);
    setCount(prevCount => prevCount+1); 
    setCount(prevCount => prevCount+1); 


  }

  const decreaseValue = () => {
    setCount(count-1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {count}</h2>

      <div style={{display:"flex", justifyContent:"center", gap:"15px"}}>
        <button onClick={increaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
      </div>
    </>
  );
}

export default App;
