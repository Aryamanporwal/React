import './App.css'
import { useState } from 'react';
import button from './components/button'
import card from './components/card';


function App() {
  const[count , setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
      <button handleClick ={handleClick} 
      text = "click me" >
        <h1>{count}</h1>
      </button>
        {/* <card name = "Aryaman">
        <h1>Best webD course</h1>
        <p>trying to be consistent in this</p>
        </card>

        <card name = "mai yha ka hu">
          hello jee , ap kaise ho?
        </card> */}
    </div>
  )
}

export default App
