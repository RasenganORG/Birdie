import React from "react"
import NavbarLogin from "../components/NavbarLogin"
import LoginForm from "../components/LoginForm"

export default function Login({ setUser }) {
  return (
    <div>
      <NavbarLogin />
      <LoginForm setUser={setUser} />
    </div>
  )
}
