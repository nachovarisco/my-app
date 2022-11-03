import React from 'react'
import User from './User'

const UserList = ({User}) => {






  return (
    <div>
        {usuarios.map((usuario)=>{  
    return (
        <User key={usuario.id}    usuario={usuario}  />
    )
    
})}


</div>
  )
}
  

export default UserList