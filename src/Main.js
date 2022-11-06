import React from 'react'
import { Route , Router, Routes } from 'react-router-dom'
import Home from './Home'
import Carrito from './Carrito'
import ItemListContainer from './ItemListContainer'

const Main = () => {
  return (
   <main>
    



<Routes>

  {/* home start  */}
  <Route path="/" element= {<Home/>}  />
  {/* productos */}
  <Route path="/Productos"  element= {<ItemListContainer/>} />
  {/* detalle */}
  <Route path="/Productos/:category"  element= {<ItemListContainer/>} />
{/* carrito  */}
  <Route path="/Carrito"  element= { <Carrito/> } />

  <Route path= '*' element = {<h1> ERROR 404 </h1>} />

</Routes>




   </main>
  )
}

export default Main