import { useState } from 'react'

import './App.css'
import './ChildComponent'
import ChildComponent from './ChildComponent';
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const handleclick = useCallback(()=>{
    setCount(count+1);
  },[count]);

  return (
    <div>
      <button onClick={handleclick}>
        count = {count}
      </button>
      <br />
      <div>
        <ChildComponent buttonName = "Click me"/>
      </div>
    </div>
    
  )
}
export default App
