import React from 'react'
import './Item.scss'
import Pizza from '../../static/pizza4.png';
export default function Item(props) {
    
    return (
        
        <div className='container'>
        
        <img src={Pizza}></img>
       <div>
         <p>ingridiants</p>
         <p>name</p>
         <h1>price</h1>
         <button onClick={()=>{props.setc(props.count+1)}}>add to cart</button>
       </div>
         
        
        
        </div>
    )
}
