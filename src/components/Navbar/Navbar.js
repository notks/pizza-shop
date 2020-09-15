import React from 'react'
import './Navbar.scss'
import SearchIcon from '../../static/SearchIcon.svg'
import LogIn from '../../static/log-in.svg'
import Cart from '../../static/supermarketdark.svg'
export default function Navbar() {
    return (
            <header>
                <div className='search-box'>
                    <input type="text" placeholder='Search for products' name="search"></input>
                   
                         <img src={SearchIcon} alt="search icon"></img> 
                
                   
                </div>
                <div className='cart-login'>
                    <button className='cart-btn'>
                    <img className='cart-icon' src={Cart} alt='Cart-icon'></img>

                    </button>
                    <button className='login-btn'>
                    <img className='login-icon' src={LogIn} alt="Login-icon"></img>                    

                    </button>
                </div>
            </header>
    )
}
