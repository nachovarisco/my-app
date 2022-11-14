import React from 'react'
import {NavLink} from "react-router-dom"
import CartWidget from './CartWidget'
import { productosIniciales } from './utils'



const Nav = () => {
  return (
    <div><nav id='MainNav'>
    {productosIniciales.map((item) => {
                return (
                    <NavLink to={`/productos/${item.category}`} key={item.category} className="link" activeClassName="active">
                        {item.category}
                    </NavLink>
                )})}

    <NavLink to ="/Productos" id='minorNav'> productos</NavLink>
   
 <CartWidget/>
    
   
</nav></div>
  )
}

export default Nav