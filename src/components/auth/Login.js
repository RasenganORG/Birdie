import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../utils/authUtil"
import React from "react"
function Login() {
  const [user, setUser] = useState("")
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    auth.login(user)
    navigate("/")
  }

  return (
    <>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='username'
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login
