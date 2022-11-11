import React from 'react'
import { Route , Router, Routes } from 'react-router-dom'
import Home from './Home'
import Carrito from './Carrito'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from  './ItemDetailContainer'

const Main = () => {
  return (
   <main id='main'>
    



<Routes>

  
  <Route path="/" element= {<Home/>}  />
 
  <Route path="/Productos"  element= {<ItemListContainer/>} />

  <Route path="/Productos/:category"  element= {<ItemListContainer/>} />

  <Route path="/Item/:id"  element= {<ItemDetailContainer/>} />
  

  <Route path="/Carrito"  element= { <Carrito/> } />

 

  <Route path= '*' element = {<h1> ERROR 404 </h1>} />

</Routes>




   </main>
  )
}

export default Main