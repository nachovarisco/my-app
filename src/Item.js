
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

{/* 
        <div class="card">

  <div class="imgBox">
    <img src={image} alt="mouse corsair" class="mouse"></img>
  </div>

  <div class="contentBox">
    <h3>{title}</h3>
    <h2 class="price"> $-{price}</h2>
    <a href="#" class="buy"><Link to={"/item/" + id}> <h4> ver producto</h4>  </Link> </a>
  </div>

</div> */}


<div id="card-main-container">
<body>
<div class="card" id="card">
    
    <h2 class="title">FUTURISTIC</h2>
    <div class="card__img">
        <div class="scene"></div>
      <img id= "card-main-img"src= {image}></img>
    </div>
    
    <div class="card__description">

        <div class="card__container">
        
            <div class="card__info">
                <div class="card__header">
                    <div class="card__rating">
                        <svg height="25" width="23" class="star rating" data-rating="1">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
                        </svg>
                        <svg height="25" width="23" class="star rating" data-rating="1">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
                        </svg>
                        <svg height="25" width="23" class="star rating" data-rating="1">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
                        </svg>
                        <svg height="25" width="23" class="star rating" data-rating="1">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
                        </svg>
                        <svg height="25" width="23" class="star rating" data-rating="1">
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
                        </svg>
                    </div>
                    <p class="card__price"> $-{price}</p>
                </div>
                <h1 class="card__title" >{title}</h1>
                <h2 class="card__subtitle">FHC - 250x</h2>
            </div>
      
           
            <button class="add-to-cart">  <Link to={"/item/" + id}>  detalle</Link></button>
        </div>
    </div>
</div>

  
</body>
</div>
</>
  
  )
}

export default Item

