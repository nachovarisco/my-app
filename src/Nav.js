import React from 'react'
import {NavLink} from "react-router-dom"
import CartWidget from './CartWidget'
import { productosIniciales } from './utils'



const Nav = () => {
 
  return (
<nav className='nav'>




    <NavLink to ="/Productos" id='minorNav'> productos</NavLink>
    <NavLink to="/productos/remeras">remeras</NavLink>
    <NavLink to="/productos/mochilas">mochilas</NavLink>
   
 <CartWidget/>
    
 </nav>

  )
}

export default Nav