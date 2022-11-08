
import React , {useState }from "react";
import useCollapse from 'react-collapsed';
import ContadorContainer from "./ContadorContainer";



const Item = ({title , image, description , price}) => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

   


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
    <ContadorContainer/>
 </div>   </>
        
  
  )
}

export default Item

