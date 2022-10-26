import React, { useEffect , useState } from 'react'
import UserList from './UserList'
import imagen1 from './logo192.png'
const UserContainer = () => {



    const [usuarios, setUsuarios] = useState ([])
useEffect (()=>{
    console.log ("pidiendo usuarios al servidor..")
    // setTimeout (()=> {
    //     console.log ("usuarios recibidos")
    //     console.log("guardo lo que consigo")

        setUsuarios ([
            {id:1, nombre: "usuario 1", img: imagen1 , precio : "300" , desc : "nctio sapiente. Fuga mollitia dolor eius a voluptatum ipsam odio vitae harum."},


            {id:2, nombre: "usuario 2", img: imagen1 , precio : "400" , desc : "nctio sapiente. Fuga mollitia dolor eius a voluptatum ipsam odio vitae harum."},

            {id:3, nombre: "usuario 3", img: imagen1 , precio : "200" , desc : "nctio sapiente. Fuga mollitia dolor eius a voluptatum ipsam odio vitae harum."}
        ])
    // },2000)
}, [])



  return (


<>
    <UserList usuarios={usuarios}     />
    {/* <p>{JSON.stringify(usuarios)}</p> */}
    </>
  )
}

export default UserContainer