import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

import { db } from './firebase'
import {collection, getDocs, query, where} from "firebase/firestore"

 






const ItemListContainer = () => {

    const [items, setItems] = useState([])

   
    const {category} = useParams()
    

    useEffect(()=> {
      

if(category){

  const productsCollection = collection(db, "productos")
  const flitro =query(productsCollection, where ("category", "==", category))
    const consulta = getDocs (flitro)
   


    consulta.then((resultado)=> {
      const productos= resultado.docs.map(doc=>({...doc.data(),id:doc.id}))
      setItems(productos)
 
    })
    .catch((error)=> {
      console.log(error)
    }, [])
}



else { const productsCollection = collection(db, "productos")
     const consulta = getDocs (productsCollection)


consulta.then((resultado) => {
 const productos= resultado.docs.map(doc=>({...doc.data(),id:doc.id}))
 setItems(productos)
})
.catch((error) => {
console.log(error)
})}
    },[category])

  return (
    <div>
        {items.length === 0 ? <h1>loading..</h1> : <div id='mainItemContainer'> <ItemList items={items}/> </div> }

    </div>
  )
}

export default ItemListContainer