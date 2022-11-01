import React , {useState }from 'react'
import Contador from './Contador'
import { Button } from 'antd';

const Botones = () => {



    const [contador, clickeo] = useState(0)

  
      let clickSuma = () => {
    
        clickeo(contador + 1)
      }
    
      let clickResta =() => {
        clickeo(contador -1)
      }
     
  return (


    <> 

<Contador clickSuma={clickSuma} clickResta={clickResta}
   
   />






    <Button onClick={clickSuma}>suma</Button>
    
    
    <Button onClick={clickResta}>resta</Button>
    
   
    </>


  )
}

export default Botones