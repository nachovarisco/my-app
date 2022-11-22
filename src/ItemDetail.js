import { randProduct } from '@ngneat/falso'
import { contexto } from './CartProvider'
import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'



const ItemDetail = () => {
    const producto = randProduct()
const valorDelContexto = useContext(contexto)

const handleOnAdd = (cantidad) => {
    console.log ("se agregaron" + cantidad + "productos")
}







const agregarAlCarrito =() => {

   valorDelContexto.vaciarCarrito()

}


      return (
    // <div id='itemDetail_container'>
        
        
    //     <h1 id='itemDetail_title'>{producto.title +" - $" + producto.price}</h1>
    //    <div id='itemDetail_button'> <ItemCount  id='itemDetail_count' handleOnAdd={handleOnAdd}/>
    //     <button id='itemDetail_addToCart'onClick={agregarAlCarrito}> añadir</button> </div>
    //     <img  id='itemDetail_img' src={producto.image} alt = ""></img>
    //     <p id='itemDetail_description'>{producto.description}</p>
        
    //      </div>
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
        <h2>{" - $" + producto.price}</h2>
        <div class="description">
          <p>  {producto.description}  </p>
        </div>
     <button  class="add-to-cart" onClick={agregarAlCarrito}> añadir</button>
    </div>
  </div>
</main>
        
  )
}

export default ItemDetail