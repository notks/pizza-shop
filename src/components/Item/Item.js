import React from 'react'
import './Item.scss'
export default function Item({addToCart,item}) {
    
    return (
        
        <div className='container'>
        
        <img src={item.image} alt='item'></img>
       <div>
           <div>
                   <p>{item.ingreadiants}</p>

           </div>
    <p>{item.name}</p>
         <h1>{item.price}</h1>
         <button onClick={()=>{addToCart(item)}}>Add to cart</button>
       </div>
         
        
        
        </div>
    )
}
