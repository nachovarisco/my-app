import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div><nav>

    <Link to ="/Productos"> productos</Link>
    <Link to ="/Productos/Remeras">Remeras</Link>
    <Link to= "/Productos/Camperas"> Camperas</Link>
  
    <Link to ="/Carrito">carrito</Link>
</nav></div>
  )
}

export default Nav