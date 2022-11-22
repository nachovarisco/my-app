import React ,{createContext, useState} from 'react'
import { db } from './firebase'

export  const contexto = createContext()

const {Provider} = contexto



const CartProvider = ({contenido}) => {
    const [carrito , setCarrito] = useState([   
        {id: 1 , nombre:"remeras", precio: 100, cantidad:3},
        {id: 2 , nombre:"lonmpa", precio: 200, cantidad:5},
      
      ])
    
    
      const [total, setTotal] = useState(4)
    
      const vaciarCarrito = () => {
        valorDelContexto.setCarrito([])
        valorDelContexto.setTotal(0)
      }
    
      const valorDelContexto ={
            productos : carrito,
            cantidad: total,
            setCarrito: setCarrito,
            setTotal: setTotal,
            vaciarCarrito : vaciarCarrito
      }
    
    
  return (
    <Provider value={valorDelContexto}>
        {contenido} </Provider>
  )
}

export default CartProvider