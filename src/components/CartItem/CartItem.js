import React from 'react'
import './CartItem.scss'
export default function CartItem(props) {
    const handleQuantitychange=(event)=>{
          const newCart=[...props.cart]
       // newCart.filter(())
        props.setcart({...props.item,q:event.target.value})
    }
    return (
        <div className='cart-component'>
            <img src={props.item.image} alt='product-image' className='cart-product-image'></img>
    <p>{props.item.name}</p>
    <input type='number' defaultValue={props.item.q} ></input>
    <p>{props.item.price}$</p>
        </div>
    )
}
