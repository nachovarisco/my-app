import React ,{createContext, useState, useContext} from 'react'


export  const contexto = createContext()

const {Provider} = contexto


export const useCarrito = () => {
  return useContext(contexto)
}


const CartProvider = ({contenido}) => {
    const [carrito , setCarrito] = useState([])
    
    
      const [total, setTotal] = useState(0)
      const [cantidadTotal, setCantidadTotal] = useState(0)
    
      const vaciarCarrito = () => {
        valorDelContexto.setCarrito([])
        valorDelContexto.setTotal(0)
      }

      const agregarProducto = (producto, cantidad) => {
        
        console.log(producto)
        console.log(cantidad)
  if(isInCart.inCart) {

  }else{
    console.log("agregaste un nuevo producto!!")
 setCarrito([...carrito,
  {...producto,cantidad}])  

 setTotal (total + producto.price * cantidad)
 setCantidadTotal(cantidadTotal + cantidad)
 


 producto.cantidad = cantidad

  }}
 const isInCart = (id) => {
  return {inCart : false, item:{}, index: 0}

 }   


      const valorDelContexto ={
            productos : carrito,
            cantidad: total,
            setCarrito: setCarrito,
            setTotal: setTotal,
            vaciarCarrito : vaciarCarrito,
            agregarProducto : agregarProducto,
            cantidadTotal :cantidadTotal
      }
    
    
  return (
    <Provider value={valorDelContexto}>
        {contenido} </Provider>
  )
}

export default CartProvider