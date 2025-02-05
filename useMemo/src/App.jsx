import { useState } from 'react'

import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const[input , setInput] = useState(0);

  function handleclick(){
    setCount(count+1);
  }

  function expensiveTask(num){
    console.log("Inside Expensive Task");
    for(let i = 0 ; i<=10000000 ; i++){}
    return num*2;
  }

  let doubleVal = useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <button onClick = {handleclick}>
        counter:{count}
      </button>
      <input type="number" 
      onChange={(e) => setInput(e.target.value)} />
      double = {doubleVal}
    </div>

  )
}

export default App
