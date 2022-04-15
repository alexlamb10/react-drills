import React from 'react'

function NewTask({userInput, setUserInput, setList, list}) {
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleClick = () => {
        let arr = []
        arr.push(...list, userInput)

        setList(arr)
    }
    
    
  return (
    <div>
        <input type="text" placeholder='Enter new Task' onChange={handleChange}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default NewTask