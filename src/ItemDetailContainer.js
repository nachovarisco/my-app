import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getProducts, getProductsById } from './utils'





const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {id} = useParams()
    

    useEffect(()=> {
      

        console.log ("cargando producto")
        if(id){
            
                getProductsById(id)
                .then(res => {
                    setItems(res)
                })
                .catch(err => 
                    console.log("errorr"))
            
        }
        else {
            console.log("pido solo: "+id)
        }
       
console.log("222")
if(id){
    getProductsById(id)
}else {

    getProducts()
        .then ((respuesta)=>{
            setItems(respuesta)
            console.log(respuesta );
           
        })
        .catch((error)=> {
            console.log(error)
        })}
    },[])

  return (
    <div>
        {items.length === 0 ? <h1>loading..</h1> : <div id=''> <ItemList items={items}/> </div> }

    </div>
  )
}

export default ItemListContainer