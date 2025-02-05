import './App.css'
import Logout from './components/logout';
import Login from './components/login';
import { useState } from 'react';
function App() {
  const [isloggedin , setloggedin] = useState(true);

  if(!isloggedin){
    return (
      <Login/>
    )
  }

  return (
    <div>
      <h1>Welcome Everyone to CodeHelp Web dev course</h1>
      <div>
        {isloggedin && <Logout/>}
      </div>
    </div>
  )

  // return(
  //   <div>
  //     {isloggedin ? <Login/> : <Logout/>}
  //   </div>
  // )

  // if(isloggedin){
  //   return (
  //     <Logout/>
  //   )
  // }
  // else{
  //   return(
  //     <Login/>
  //   )
  // }
}

export default App
