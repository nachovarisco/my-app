
import React , {useContext, useState }from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import { contexto } from "./CartProvider";



const Item = ({title , image,  price, id}) => {
  
const resultado = useContext(contexto)
console.log(resultado.cantidad)

  // mi data es item



  return (
    
<>


        <div class="card">

  <div class="imgBox">
    <img src={image} alt="mouse corsair" class="mouse"></img>
  </div>

  <div class="contentBox">
    <h3>{title}</h3>
    <h2 class="price"> $-{price}</h2>
    <a href="#" class="buy"><Link to={"/item/" + id}> <h4> ver producto</h4>  </Link> </a>
  </div>

</div>


</>
  
  )
}

export default Item

