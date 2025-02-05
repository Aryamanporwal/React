import { useState } from 'react'
import { useRef } from 'react';
import './App.css'
// import { useEffect } from 'react';

function App() {

  const [time , setTime] = useState(0);
  let timerref = useRef(null);
  function startTimer(){
    timerref.current = setInterval(()=>{
      setTime(time => time+1)
    },1000);
  }
  function stopTimer(){
    clearInterval(timerref.current);
    timerref.current =null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  // const [count, setCount] = useState(0)
  // let val = useRef(0);

  // let btnref = useRef()

  // function handleIncrement(){
  //   val.current = val.current +1;
  //   setCount(count+1);
  //   console.log("hehe")
  // }

  // function changeColor(){
  //   btnref.current.style.backgroundColor = "red";  
  // }

  // //it runs on very log
  // useEffect(()=>{
  //   console.log("hi");
  // })

  return (
    <div>
      <h1>StopWatch :{time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br />
      <br />
      <button onClick={stopTimer}>
        Stop Timer
      </button>
      <br />
      <br />
      <button onClick = {resetTimer}>
        ResetTimer
      </button>
    </div>
    // <div>

    // <button 
    // ref  ={btnref}
    // onClick={handleIncrement}>
    //   increament
    // </button>
    // <br />
    // <div>
    //   Count : {count}
    // </div>
    // <br />
    // <button onClick={changeColor}>
    //     Change Color
    // </button>
    // </div>
  )
}

export default App
