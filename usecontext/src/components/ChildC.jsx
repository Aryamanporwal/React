import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const ChildC = () => {
  // const user = useContext(UserContext);
  const {theme , setTheme} = useContext(ThemeContext);

  function handleclick(){
    if(theme === 'light')
      setTheme('dark')
    else
      setTheme('light')
  }
  return (
    <div>
      {/* {user.name} */}
      {/* {theme} */}
      <button onClick={handleclick}>
        Change theme
      </button>
    </div>
  )
}

export default ChildC