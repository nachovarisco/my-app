import React from 'react'
import {NavLink} from "react-router-dom"
import CartWidget from './CartWidget'




const Nav = () => {
 
  return (
<nav className='nav'>




    <NavLink to='/productos'> productos</NavLink>
    <NavLink to='/productos/remeras'>remeras</NavLink>
    <NavLink to='/productos/mochilas'>mochilas</NavLink>
 <CartWidget/>
    
 </nav>

  )
}

export default Nav