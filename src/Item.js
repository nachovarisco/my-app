

const Item = ({title , image, description , price}) => {


  return (
    
<>

<div className='container' id="cardContainer">
         <h4 id="cardTitle">{title}</h4>
         <h5 id="cardPrice">{price}</h5>
         <img src = {image} id="cardImg"></img>
         <button id="cardButton"> ver mas</button>
         <p> {description}</p>
         
        
        </div>




        </>
  
  )
}

export default Item
