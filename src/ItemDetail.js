import { randProduct } from '@ngneat/falso'
import React from 'react'
import ItemCount from './ItemCount'



const ItemDetail = () => {


    const producto = randProduct()
      return (
    <div>
        
        
        <h1>{producto.title +" - $" + producto.price}</h1>
        <ItemCount/>
        <img src={producto.image} alt = ""></img>
        <p>{producto.description}</p>
        
         </div>
  )
}

export default ItemDetail