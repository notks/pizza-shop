import React from 'react'
import './CartItem.scss'
export default function CartItem({item,setcart,cart,qChange,removeItem}) {
    
    return (
        <div className='cart-component'>
            <img src={item.image} alt='product' className='cart-product-image'></img>
    <p>{item.name}</p>
    <input type='number' value={item.q} min='1' onChange={(e)=>qChange(e,item)} ></input>
    <p>{item.price}$</p>
    <button onClick={()=>{removeItem(item.id)}}>Remove item</button>
        </div>
    )
}
