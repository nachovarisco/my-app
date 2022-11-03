import React, { useEffect , useState } from 'react'
import UserList from './UserList'
import imagen1 from './logo192.png'
import User from './User'



const setProductos = ([
                {id:1, nombre: "usuario 1", img: imagen1 , precio : "300" , desc : "nctio sapiente. Fuga mollitia dolor eius a voluptatum ipsam odio vitae harum." , category : "zapatilla"  },
        
        
                {id:2, nombre: "usuario 2", img: imagen1 , precio : "400" , desc : "nctio sapiente. Fuga mollitia dolor eius a voluptatum ipsam odio vitae harum." , category : "remera"  },
        
                {id:3, nombre: "usuario 3", img: imagen1 , precio : "200" , desc : "nctio sapiente. Fuga mollitia dolor eius a voluptatum ipsam odio vitae harum." , category : "pantalon"  }
            ])  


const UserContainer = () => {




    const [items, setProductos] = useState ([])
useEffect (()=>{

    console.log("pidiendo productos...")


   let simulacionPedido = new Promise((res) => {
      setTimeout (()=> {
       
        res (UserList)
      }, 2000)
    })


    simulacionPedido


    .then ((respuesta) => {

        setProductos(respuesta)

    })
    .catch((error)=> {
    console.log (error)
    })
})


  
 
       

//     },2000)

//     })
       




  return (




<div> { items.length == 0 ? <h1>cargando..</h1> : <UserList items = {items}/> }

</div>
 
  )
}

export default UserContainer