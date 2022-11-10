import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getProducts, getProductsById } from './utils'





const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {id} = useParams()
    

    useEffect(()=> {
      

        
        if(id){
            
                getProductsById(id)
                .then(res => {
                    setItems(res + console.log(res))
                })
                .catch(err => 
                    console.log(err))
            
        }
        else {
            console.log(id)
        }
       

if(id){
    getProductsById(id)
}else {

    getProducts()
        .then ((respuesta)=>{
            setItems(respuesta)
          ;
           
        })
        .catch((error)=> {
           
        })}
    },[{items}])

  return (
    <div>
        {items.length === 0 ? <h1>loading..</h1> : <div id=''> <p>aca va el producto pero se rompe todo </p></div> }

    </div>
  )
}

export default ItemListContainer