import React from 'react'
import './Content.scss'
import Item from '../Item/Item'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'

export default function Content() {
    const [count, setcount] = useState(1)
    const items=[{
name:'pizza1',
ingreadiants:'ingreadiants1',
price:10,
image:'wdqd'
    },
    {

    }
]
    return (
        <div className='content'>
            <div className='items'>
  
                 <Item count={count} setc={setcount}></Item> 
                  <Item></Item>
                  <Item></Item>

                  <Item></Item>           
                  <Item></Item>
                  <Item></Item>

                  <Item></Item> 
                  <Item></Item>
                  <Item></Item>

            </div>
            <div className='sidebar'>
  <Sidebar count={count}></Sidebar>
            </div>
                    
                  
       

          

        </div>
    )
}
