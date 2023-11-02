import React from 'react'
import logo from '../assets/logo.png'

export default function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-center">
      <img src={logo} alt='logo' width="150" height="150" />
      </div>
      <div className="border-b border-white"></div>
    </nav>
  )
}