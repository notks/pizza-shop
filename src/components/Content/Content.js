import React from 'react'
import './Content.scss'
import Item from '../Item/Item'
import Sidebar from '../Sidebar/Sidebar'
import { useState,useEffect } from 'react'
export default  function Content() {
    const url='http://127.0.0.1:8000/products'
    const [cart, setcart] = useState([])
    const [items, setitems] = useState([])
    useEffect(() => {
        console.log('fetching')
  
        fetch(url)
        .then(response =>response.json())
        .then(json =>{setitems(json)} )
  
   },[])
    
const addToCart=(item)=>{
    const newCart=[...cart]
    let found=false
    newCart.forEach((cartItem)=>{
        if(cartItem.id===item.id){
            cartItem.q++
            found=true
        }

    })
    if(found===false){
        item.q=1
newCart.push(item)
    }
    

    
setcart(newCart)
}
    
    return (
        <div className='content'>
            <div className='items'>
            {
                items.map(item=>{
                   return( <Item
                   key={item.id}
                   addToCart={addToCart}
                    item={item}
                    setcart={setcart}
                    cart={cart}
                    ></Item>
                   )
                })
            }
                 

            </div>
            <div className='sidebar'>
  <Sidebar setcart={setcart} cart={cart}></Sidebar>
            </div>
                    
                  
       

          

        </div>
    )
}
