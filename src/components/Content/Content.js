import React from 'react'
import './Content.scss'
import Item from '../Item/Item'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'

export default function Content() {
    const [count, setcount] = useState([])
    const items=[{
name:'pizza1',
ingreadiants:'ingreadiants1',
price:10,
image:'/img/pizza1.png'
    },
    {
        name:'pizza2',
        ingreadiants:'ingreadiants2dasdddddddddddddddddddddddddddddddddddddddddddddddddddd',
        price:10,
        image:'/img/pizza4.png'
            },
            {
                name:'pizza3',
                ingreadiants:'ingreadiants3',
                price:20,
                image:'/img/pizza3.png'
                    },
]
    return (
        <div className='content'>
            <div className='items'>
  {
      items.map(item=>{
          return( 
            <Item 
            count={count}
            setc={setcount}
          item={item}
            ></Item> 
          
          
          )
      })
  }
                 
               

            </div>
            <div className='sidebar'>
  <Sidebar count={count}></Sidebar>
            </div>
                    
                  
       

          

        </div>
    )
}
