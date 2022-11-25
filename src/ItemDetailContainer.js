import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { db } from './firebase'
import { getDoc , collection, doc} from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const {id} = useParams()

  useEffect(() => {const productsCollection = collection(db, "productos")

  const ref = doc(productsCollection , id)
  const consulta = getDoc(ref)



  consulta.then(res=>
    {setItem(res.data())
    
    })





    
    .catch(error =>
    console.log(error))
    }, [])
 
  return (
     <ItemDetail producto={{...item }}/>   
  )
}

export default ItemDetailContainer