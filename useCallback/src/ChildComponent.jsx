import React from 'react'

const ChildComponent = React.memo((props) => {
   
    return (
    <div>
      <button>
          {props.buttonName}
      </button>
    </div>
    )
})

;

export default ChildComponent


//React memo -> wrap -> component -> compenent re render tabhi hoga 
// jab props change honge nahi toh re render nhi hoga

//if u r sending a function than react.memo cannot save from re rendering