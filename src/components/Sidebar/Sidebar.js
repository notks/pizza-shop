import React, { useState,useEffect,useRef } from 'react'
import './Sidebar.scss'
import CartItem from '../CartItem/CartItem'
export default function Sidebar(props) {
    const [price, setprice] = useState(0)
    const cartcount = useRef(0)
   useEffect(() => {
       cartcount.current=0
    props.cart.forEach(item=>{
        for (let index =1; index <=item.q; index++) {
           
         setprice(price+item.price)
        cartcount.current=cartcount.current+1
        }
        
         
    }

    )
   }, [props.cart])
    return (
        <div className='sidebar'>
        <div className='cart'>
            <img src='/img/supermarketlight.svg' className='shopping-cart-sidebar' alt='shopping-cart'></img>
        </div>
      {props.cart.map(item=>{
        
          return ( <CartItem 
            setcart={props.setcart}
        item={item}
          /> 
          )
      }

      )}
<div className='price'>
{price}$<br></br>
{cartcount.current}
</div>

        </div>
    )
}
