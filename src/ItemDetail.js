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
    <div>
        
        
        <h1>{producto.title +" - $" + producto.price}</h1>
        <ItemCount handleOnAdd={handleOnAdd}/>
        <button onClick={agregarAlCarrito}> añadir al carrito</button>
        <img src={producto.image} alt = ""></img>
        <p>{producto.description}</p>
        
         </div>
  )
}

export default ItemDetail