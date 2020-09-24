import React from 'react'
import './Navbar.scss'

export default function Navbar() {
    return (
            <header>
                <div className='search-box'>
                    <input type="text" placeholder='Search for products' name="search"></input>
                   
                         <img src='/img/SearchIcon.svg' alt="search icon"></img> 
                
                   
                </div>
                <div className='cart-login'>
                 
                    <button className='cart-btn'>
                    <img className='cart-icon' src='/img/supermarketlight.svg' alt='Cart-icon'></img>

                    </button>
                    <button className='login-btn'>
                    <img className='login-icon' src='/img/log-in.svg' alt="Login-icon"></img>                    

                    </button>
                </div>
            </header>
    )
}

