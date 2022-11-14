import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CartProvider'

const CartWidget = () => {

const valorDelContexto = useContext(contexto)


  return (
    <>
 <Link to = "Carrito">
<div> <i
class="fi fi-rr-shopping-cart"></i></div>
<span>{valorDelContexto.cantidad}</span>
</Link>
    </>
  )
}

export default CartWidget