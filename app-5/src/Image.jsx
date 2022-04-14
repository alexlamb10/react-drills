import React from 'react'

function Image(props) {
    
  return (
    <div>
        <img src={props.imgURL} alt="pic" />
    </div>
  )
}

export default Image