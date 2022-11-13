import React from 'react'
import {NavLink} from "react-router-dom"
import CartWidget from './CartWidget'



const Nav = () => {
  return (
    <div><nav id='MainNav'>

    <NavLink to ="/Productos" id='minorNav'> productos</NavLink>
    <NavLink to ="/Productos/Category" id='minorNav'>Remeras</NavLink>
    <NavLink to= "/Productos/Category:id" id='minorNav'> Camperas</NavLink>
  
    <NavLink to ="/Carrito" id='carrito'> <img src='src\carrito.png'></img></NavLink>
    <CartWidget/>
</nav></div>
  )
}

export default Nav