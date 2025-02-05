import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {

    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashboard');
    }

  return (
    <div>
        <button onClick={handleClick}>
            Move to dashboard page
            </button>About</div>
  )
}

export default About