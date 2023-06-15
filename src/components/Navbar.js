import React from 'react'
import './styles/navbar.css'
import logo from '../assets/images/logo/miamLogo.png'

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <h4>
              <a href="#">
                <img src={logo} alt="Logo miam" />
              </a>
            </h4>
        </div>
        <ul className="nav-links">
            <li className="nav-link"><a href="#">Offres</a></li>
            <li className="nav-link"><a href="#">Menus</a></li>
            <li className="nav-link"><a href="#">A Propos</a></li>
            <li className="nav-link"><a href="#">Contact</a></li>
        </ul>
        <button className="signIn">S'inscrire</button>
    </nav>
  )
}

export default Navbar