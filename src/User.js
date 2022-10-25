import React from 'react'

const User = ({usuario}) => {
      return (
    <div className='container'>
<card id='cardUser'>
 <h1 id='tituloUsuario'> {console.log (usuario.id)} {usuario.nombre}</h1> <img id='imgCard' src= {usuario.img}></img> 
  
  </card>


    </div>
  )
}

export default User