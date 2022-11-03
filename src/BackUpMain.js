import React, { useState }from 'react'
import { Button, Card } from 'antd';
import ContadorContainer from './ContadorContainer';
import UserContainer from './UserContainer';
import Title from 'antd/lib/skeleton/Title';



const Main = () => {

  const [producto, setProducto] = useState ('loading..')

  const mostrarProductos = () => {
    const pedido = fetch('https://fakestoreapi.com/products?limit=5')
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

    <div className="container" id='containerContador'>

    <div id='divContador'   className= 'container'>
      <h3 id='tituloContador'>
   <ContadorContainer/>
   
     </h3>
     </div>
   </div>

   <div id="userCnt">
      <UserContainer/>
      </div>



     
   </>

   

        
  )
}

export default Main

