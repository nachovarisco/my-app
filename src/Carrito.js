import { collection, addDoc , serverTimestamp } from 'firebase/firestore'
import React ,{useRef} from 'react'
import { useCarrito } from './CartProvider'
import { db } from './firebase'








const Carrito = () => {

const valorDelContexto = useCarrito()
 
  
const refName = useRef()
const refTelefono = useRef()



  const handleSubmit = (e) => {
  e.preventDefault()

   const orden = {
    buyer : {
      name: refName,
    
      phone : refTelefono,


    },
    products : [],
    total: 100,
    date : serverTimestamp(),
   }
   console.log(refName,refTelefono)
  
  const ordersCollection = collection(db, "usuarios")
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
      <input  ref={refTelefono} type= "text"/>
    </div>
    <button> guardar    </button>
   </form>
    </div>
  )
}

export default Carrito