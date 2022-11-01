import React, { useState }from 'react'
import { Button } from 'antd';
import ContadorContainer from './ContadorContainer';
import UserContainer from './UserContainer';



const Main = () => {

  const [producto, setProducto] = useState ('loading..')

  const mostrarProductos = () => {
    const pedido = fetch('https://fakestoreapi.com/products')
pedido
.then((respuesta)=> {
  return respuesta.json()})

  .then ((respuesta) => {

    setProducto(console.log(respuesta))
    
  })







.catch((error)=>{
  console.log ("error:" + error)
})






  }



  return (
    <>

    <div id='divContador'   className= 'container'>
      <h3 id='tituloContador'>
   <ContadorContainer/>
   
     </h3>
   </div>

   <div id="userCnt">
      <UserContainer/>
      </div>




      <button  onClick={mostrarProductos}  >aaaaaaaaaaaaa</button>

    
      <div>{producto} </div>
    
     
   </>

   

        
  )
}

export default Main

