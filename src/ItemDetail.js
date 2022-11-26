import { randProduct } from '@ngneat/falso'
import { contexto, useCarrito } from './CartProvider'
import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'




const ItemDetail = ({producto}) => {

 const {agregarProducto} =  useCarrito()
 const [cantidad, setCantidad]= useState(0)

 const [confirmado, setConfirmado] = useState(false)


const handleOnAdd = (cantidad) => {
    console.log ("se agregaron" + cantidad + "productos")
    setCantidad(cantidad)
    setConfirmado(true)
}


const handleClick = () => {
  agregarProducto(producto, cantidad)
}




const agregarAlCarrito =() => {

  //  valorDelContexto.vaciarCarrito()

}


      return (
 
    <main id='item-detail-main'>
  <div class="container">
      </div>
    <div class="grid product">
      <div class="column-xs-12 column-md-7">
        <div class="product-gallery">
          <div class="product-image">
            <img class="active" src={producto.image}></img>
          </div>
         
        </div>
      </div>
      <div class="column-xs-12 column-md-5">
        <h1>{producto.title}</h1>
        <h2>{"$" + producto.price}</h2>
        <div class="description">
          <p>  {producto.description}  </p>
        </div>
     
     <button  class="add-to-cart" onClick={agregarAlCarrito}>   añadir
     </button>
     <div>
        <ItemCount init={cantidad} handleOnAdd={handleOnAdd}/>
        {confirmado && <button onClick={handleClick}>agregar al carrito</button>}
       </div>
    </div>
  </div>
</main>
        
  )
}

export default ItemDetail