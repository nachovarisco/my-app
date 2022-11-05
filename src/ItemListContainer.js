import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
let productosIniciales = [{id:1, nombre: "remera" ,categoria : "remera"}, {id:2, nombre : "campera" , categoria : "remera"}]

const ItemListContainer = () => {



    const [items, setItems] = useState([])
    const {category} = useParams()
    console.log (category)

    useEffect(()=> {
        console.log ("cargando productos")
        if(!category){
            console.log ("pido todo")
        }else {
            console.log("pido solo: "+category)
        }
        let simulacionPedido = new Promise((res) => {
            setTimeout(() => {
               
                res(productosIniciales);
                console.log("cargados")
            }, 2000); 
        })
        simulacionPedido 
        .then ((respuesta)=>{
            setItems(respuesta)
            console.log(respuesta);
           



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