import React from 'react'
import react from '../assets/react.svg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className ='user-conatiner' style={props.style}>
        <p id = 'user-name'>{props.name}</p>
        <img id='user-img' src={react} alt="love" />
        <p id ="user-desc">{props.desc}</p>
    </div>
  )
}

export default UserCard