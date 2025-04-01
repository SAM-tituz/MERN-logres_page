import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>

    <nav className="navbar bg-body-tertiary">
      <Link className="nav-link " to = "/"style={{margin:"2px"}}>Home</Link>
      <Link className="nav-link "  to="/login" style={{margin:"2px"}}>Login</Link>
      <Link className="nav-link "  to = "/register">Register</Link>
    </nav>
    </>
  )
}

export default Navbar