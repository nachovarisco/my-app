import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Home'
import Carrito from './Carrito'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from  './ItemDetailContainer'

const Main = () => {




  
  return (
   <main id='main'>
    
   


<Routes>

  
  <Route path="/" element= {<Home/>}  />
 
  <Route  path="/productos"  element= {<ItemListContainer/>}  />

  <Route path="/productos/:category"  element= {<ItemListContainer/>} />

  <Route path="/item/:id"  element= {<ItemDetailContainer/>} />
  

  <Route path="/Carrito"  element= { <Carrito/> } />

 

  <Route path= '*' element = {<h2> ERROR 404 </h2>} />

</Routes>





   </main>
  )
}

export default Main