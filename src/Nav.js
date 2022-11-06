import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div><nav>

    <NavLink to ="/Productos"> productos</NavLink>
    <NavLink to ="/Productos/Remeras">Remeras</NavLink>
    <NavLink to= "/Productos/Camperas"> Camperas</NavLink>
  
    <NavLink to ="/Carrito">carrito</NavLink>
</nav></div>
  )
}

export default Nav