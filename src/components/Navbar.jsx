import React from 'react'
import '../index.css'

export default function Navbar() {
  return (
    <div>
        <header>
            <nav>
                <img src="/logo192.png" alt="react-logo" className='nav--icon' />
                <h3 className="nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </header>
    </div>
  )
}
