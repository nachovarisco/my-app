import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CartProvider'


const CartWidget = () => {

const valorDelContexto = useContext(contexto)


const cantidadCarrito = localStorage.getItem("cantidad")
console.log(cantidadCarrito)

  return (
    <>
 <Link to = "/Carrito">
<div> <i
class="fi fi-rr-shopping-cart"></i></div>
<span>{cantidadCarrito}</span>
</Link>
    </>
  )
}

export default CartWidget