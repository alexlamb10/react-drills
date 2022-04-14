import React, {useState} from 'react'

function Login() {
    const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleLogin = () => {
    alert(`Username: ${username} Password: ${password}`)
  }

  return (
    <div>
        
      <input type="text" placeholder='Enter username' onChange={handleUsername}/>
      <input type="text" placeholder='Enter password' onChange={handlePassword}/>
      <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Login