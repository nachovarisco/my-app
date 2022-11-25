import { collection, addDoc , serverTimestamp } from 'firebase/firestore'
import React ,{useRef} from 'react'
import { db } from './firebase'






const Carrito = () => {


 
  
const refName = useRef()
const refEdad = useRef()



  const handleSubmit = (e) => {
  e.preventDefault()

   const orden = {
    buyer : {
      name: "carlito",
      phone : "2222222",

    },
    products : [],
    total: 100,
    date : serverTimestamp(),
   }
  const ordersCollection = collection(db, "productos")
  const consulta = addDoc(ordersCollection, orden)

  consulta 
  .then((docRef) =>{
    console.log(docRef.id)

  })
  .then((error)=>
  console.log(error))
  
}

  return (
    <div>
   <form onSubmit={handleSubmit}>
    <div className='container'>
      <input ref={ refName} type= "text"/>
    </div>
    <div>
      <input  ref={refEdad} type= "text"/>
    </div>
    <button> guardar    </button>
   </form>
    </div>
  )
}

export default Carrito