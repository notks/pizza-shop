import React from 'react'
import './Sidebar.scss'
import CartItem from '../CartItem/CartItem'
export default function Sidebar(props) {
    return (
        <div className='sidebar'>
        <div className='cart'>
            <img src='/img/supermarketlight.svg' className='shopping-cart-sidebar' alt='shopping-cart'></img>
        </div>
      {props.count.map(item=>{
          
          return ( <CartItem 
            
        item={item}
          /> 
          )
      }
      )}


        </div>
    )
}
