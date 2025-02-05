import React,{useState} from 'react';
import React from 'react'
import 'C:\Users\Lenovo\OneDrive\Desktop\React2\counter\src\components\counter.css'
const counter = () => {
    const [count , setcount] = useState(0);
  return (
    <div className='counter-container'>

        <p id='para'>you have clicked {count}times</p>
        <button id='btn' onClick={()=> {setcount(count+1)}}>fuck me</button>
    </div>
  )
}

export default counter