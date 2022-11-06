import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getProducts } from './utils'





const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {category} = useParams()
    

    useEffect(()=> {

        console.log ("cargando productos")
        if(!category){
            console.log ("pido todo")
        }else {
            console.log("pido solo: "+category)
        }
       
    getProducts()
        .then ((respuesta)=>{
            setItems(respuesta)
            console.log(respuesta );
           
        })
        .catch((error)=> {
            console.log(error)
        })
    },[category])

  return (
    <div>
        {items.length == 0 ? <h1>loading...tuki...tuki...</h1> : <ItemList items={items}/> }

    </div>
  )
}

export default ItemListContainer