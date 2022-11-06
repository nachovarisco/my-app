import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getProducts, getProductsByCategoryId } from './utils'





const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {category} = useParams()
    

    useEffect(()=> {
      

        console.log ("cargando productos")
        if(!category){
            
                getProductsByCategoryId(category)
                .then(res => {
                    setItems(res)
                })
                .catch(err => 
                    console.log(err))
            
        }
        else {
            console.log("pido solo: "+category)
        }
       
console.log("99")
if(category){
    getProductsByCategoryId(category)
}else {

    getProducts()
        .then ((respuesta)=>{
            setItems(respuesta)
            console.log(respuesta );
           
        })
        .catch((error)=> {
            console.log(error)
        })}
    },[category])

  return (
    <div>
        {items.length == 0 ? <h1>loading...tuki...tuki...</h1> : <ItemList items={items}/> }

    </div>
  )
}

export default ItemListContainer