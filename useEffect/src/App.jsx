
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
function App() {

  const[count , setCount] = useState(0);
  const[total , setTotal] = useState(1);
  //first -> side effect function
  //second -> cleanup function
  //third -> comma separated dependency list --> ye koi bhi update ho jaye toh side effect ka logic auto. run karega

  //variation:1
  //runs on every render
  // useEffect(() => {
  //  alert("I will run on each render")
  // })

  //variation:2
  //runs on only on first render
  // useEffect(() => {
  //   alert("I will run onlt first render")
  // }, [])
  
  //variation :3
  // useEffect(() => {
  //   alert("I will run when count is updated")
  // }, [count])
  
  //variation:4
  // useEffect(() => {
  //   alert("chala do")
  // }, [count , total])
  

  //variaton:5
  useEffect(() => {
    alert("Count is updated")
  
    return () => {
      alert("count is unmounted from ui")
    }
  }, [count])
  

  function handleclick(){
    setCount(count+1);
    setTotal(count+2);
  }

  

  return (
    <div>
      <button onClick={handleclick}>CLICK ME</button>
      <br />
      Count is:{count}
      <button onClick={handleclick}>Updated total:</button>
      <br />
      Total is:{total}
    </div>
  )
}

export default App
