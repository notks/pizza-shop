import React from 'react'
import './Content.scss'
import Item from '../Item/Item'
import Sidebar from '../Sidebar/Sidebar'
import { useState,useEffect } from 'react'
import axios from 'axios'
export default  function Content() {
    const url='http://127.0.0.1:8000/products'
    const [count, setcount] = useState([])
    const [items, setitems] = useState([])
    useEffect(() => {
        console.log('fetching')
  
        fetch(url)
        .then(response =>response.json())
        .then(json =>{setitems(json)} )
  
   },[])
    
    
    return (
        <div className='content'>
            <div className='items'>
            {
                items.map(item=>{
                   return( <Item
                    item={item}
                    setc={setcount}
                    count={count}
                    ></Item>
                   )
                })
            }
                 

            </div>
            <div className='sidebar'>
  <Sidebar setcart={setcount} cart={count}></Sidebar>
            </div>
                    
                  
       

          

        </div>
    )
}
