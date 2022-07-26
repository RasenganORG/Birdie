import { useState } from "react"
import React from "react"
function SignUp() {
  const [formData, setFormData] = useState({
    // username: "",
    email: "",
    password: "",
    password2: "",
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <>
      <form>
        <input
          type='email'
          placeholder='Enter your email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          placeholder='Enter your password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Verify your password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default SignUp
