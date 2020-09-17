import React from 'react';
import './App.scss';
import Navbar from'./components/Navbar/Navbar';
import Item from './components/Item/Item'
import Content from './components/Content/Content'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
function App() {
 var styles={
   
 }
  return (
    <div className='wrapper'>
   
      <BrowserRouter>
            <Navbar></Navbar>
           <Content></Content>


      </BrowserRouter>
     
     </div>
  );
}

export default App;
