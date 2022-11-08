import React from 'react'
import {NavLink} from "react-router-dom"


const Nav = () => {
  return (
    <div><nav id='MainNav'>

    <NavLink to ="/Productos" id='minorNav'> productos</NavLink>
    <NavLink to ="/Productos/Category" id='minorNav'>Remeras</NavLink>
    <NavLink to= "/Productos/Category:id" id='minorNav'> Camperas</NavLink>
  
    <NavLink to ="/Carrito" id='carrito'> <img src='src\carrito.png'></img></NavLink>
</nav></div>
  )
}

export default Nav