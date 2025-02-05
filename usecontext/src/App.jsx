import './App.css'
import { createContext } from 'react'
// import ChildA from './components/ChildA';
import { useState } from 'react';
import ChildA from './components/childA';
//STEP 1: create context
// const UserContext = createContext();

//STEP 2: wrap all the child inside a provider

//STEP 3: pass value

//STEP 4: consumer k andar jake consume krlo

const ThemeContext = createContext();
function App() {
 //useContext -> Create context
//  ->provide
//  ->consume
  // const [user , setUser] = useState({name:"Aryaman"})
  const [theme , setTheme] = useState('light');
  return (
    <div>

      <ThemeContext.Provider value ={{theme ,setTheme}}>
        <div id = "Container" style={{backgroundColor:theme==='light'?"aqua":"black"}}>
        <ChildA/>

        </div>
      </ThemeContext.Provider>



      {/* <UserContext.Provider value={user}>
        <ChildA/>    
      </UserContext.Provider> */}
      </div>
  )
}

export default App
// export {UserContext}
export{ThemeContext}
