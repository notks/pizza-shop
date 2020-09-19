import React from 'react';
import './App.scss';
import Navbar from'./components/Navbar/Navbar';
import Item from './components/Item/Item'
import Content from './components/Content/Content'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
function App() {

  return (
    <div className='wrapper'>
   
            <Navbar></Navbar>

<Content></Content>
     
     </div>
  );
}

export default App;
