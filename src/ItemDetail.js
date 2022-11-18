import { randProduct } from '@ngneat/falso'
import { contexto } from './CartProvider'
import React, { useContext } from 'react'
import ItemCount from './ItemCount'



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
    <div id='itemDetail_container'>
        
        
        <h1 id='itemDetail_title'>{producto.title +" - $" + producto.price}</h1>
       <div id='itemDetail_button'> <ItemCount  id='itemDetail_count' handleOnAdd={handleOnAdd}/>
        <button id='itemDetail_addToCart'onClick={agregarAlCarrito}> añadir</button> </div>
        <img  id='itemDetail_img' src={producto.image} alt = ""></img>
        <p id='itemDetail_description'>{producto.description}</p>
        
         </div>
        
  )
}

export default ItemDetail