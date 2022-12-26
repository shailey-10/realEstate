import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
        <h2>Estatery</h2>
        </div>
        <div className="links">
            <p className='active'>Rent</p>
            <p>Buy</p>
            <p>Sell</p>
            <p>Manage Property</p>
            <p>Resources</p>
        </div>
        <div className="cta">
            <p className='alternate'>Login</p>
            <p>Signup</p>
        </div>
    </div>
  )
}

export default Navbar