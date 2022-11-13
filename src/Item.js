
import React , {useContext, useState }from "react";
import useCollapse from 'react-collapsed';
import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import {contexto} from "./App"



const Item = ({title , image, description , price, id}) => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

   
const resultado = useContext(contexto)
console.log(resultado.cantidad)

  // mi data es item



  return (
    
<>
<div id="cardContainer">
       <h4 id="cardTitle">{title}</h4>
         <h5 id="cardPrice">{price}</h5>
         <img src = {image} id="cardImg" alt="#"></img> 
     <div>
<button id= "cardBtn"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'menos' : 'mas'}
      </button>
      <section {...getCollapseProps()}>{description}</section>
    </div>  
    <button>  <Link to={"/item/" + id}> <h4> ver producto</h4>  </Link>  </button>
 </div>  </>
        
  
  )
}

export default Item

