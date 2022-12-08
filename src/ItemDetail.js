import {  useCarrito } from './CartProvider'
import React, { useState } from 'react'
import ItemCount from './ItemCount'
import {Animated} from "react-animated-css";
import { isVisible } from '@testing-library/user-event/dist/utils';




const ItemDetail = ({producto}) => {

 const {agregarProducto} =  useCarrito()
 const [cantidad, setCantidad]= useState(0)

 const [confirmado, setConfirmado] = useState(false)


const handleOnAdd = (cantidad) => {
    console.log ("se agregaron" + cantidad + " productos")
    setCantidad(cantidad)
    setConfirmado(true)
//     if (confirmado (true))
//     { isVisible(false)}
// else
//  {isVisible(true)}
  
}


const handleClick = () => {
  agregarProducto(producto, cantidad)
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




     <button id='add-to-cart-detail' class="add-to-cart" >  <ItemCount init={cantidad} handleOnAdd={handleOnAdd} />
     <Animated animationIn="bounceInDown" animationOut="bounceOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible ={true}>
    { confirmado && <button  className='' id="add-to-cart-confirm"onClick={handleClick}>agregar al carrito</button>}</Animated>
     </button>
     <div>



{/* 
      sumar y restar */}
        

        {/* agrega carrito en al consola */}
        
       </div>
    </div>
  </div>
</main>
        
  )
    }


export default ItemDetail