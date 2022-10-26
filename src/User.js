import React from 'react'

const User = ({usuario}) => {
      return (




<>

<div className ='page-wrapper'>
    <div className ='card-wrapper'>
 <div className ='card-details'>
    <h3 className="card-title"> {usuario.nombre}   </h3>
    

    <h4 id='usuarioPrice'>$ {usuario.precio}</h4>
    
    
    </div>
    <div className ='reveal-details'>
        <p id='descripcion'>{usuario.desc}</p>
        <img id='imgUser'  src ={usuario.img}></img>
    </div>
</div>
</div>
</>



  )
}




export default User