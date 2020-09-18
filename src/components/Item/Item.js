import React from 'react'
import './Item.scss'
export default function Item(props) {
    
    return (
        
        <div className='container'>
        
        <img src={props.item.image}></img>
       <div>
    <p>{props.item.ingreadiants}</p>
    <p>{props.item.name}</p>
         <h1>{props.item.price}</h1>
         <button onClick={()=>{props.setc([...props.count,props.item])}}>add to cart</button>
       </div>
         
        
        
        </div>
    )
}
