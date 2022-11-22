import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getProducts, getProductsByCategoryId } from './utils'
import { db } from './firebase'
 






const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {category} = useParams()
    

    useEffect(()=> {
      

        if(category){
            
                getProductsByCategoryId(category)
                .then(res => {
                    setItems(res)
                })
                .catch(err => 
                    console.log("errorr"))
            
        }
        else {
       
        }
       

if(category){
    getProductsByCategoryId(category)
}else {

    getProducts()
        .then ((respuesta)=>{
            setItems(respuesta)
           ;
           
        })
        .catch((error)=> {
           
        })}
    },[])

  return (
    <div>
        {items.length === 0 ? <h1>loading..</h1> : <div id='mainItemContainer'> <ItemList items={items}/> </div> }

    </div>
  )
}

export default ItemListContainer