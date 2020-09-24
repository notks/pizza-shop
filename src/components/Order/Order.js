import React ,{useRef} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Order.scss'
export default function Order({cart,setcart}) {
const cartItems = useRef([])
       

          const newCart=JSON.parse(localStorage.getItem('cart'))
    cartItems.current=newCart

    return (
        <div className='order-items'>
            <div className='items'>
Order info
            </div>
           
        </div>
    )
}
