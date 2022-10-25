import React from 'react'
import User from './User'

const UserList = ({usuarios}) => {






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