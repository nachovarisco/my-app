import React, {useState} from 'react';
import Contador from './Contador';
const ContadorContainer = () => {
    
    // const estado = useState(0)
    // const contador = estado[0]
    // const clickeo = estado[1]    

const [contador, clickeo] = useState(0)



    
      let clickSuma = () => {
    
        clickeo(contador + 1)
      }
    
      let clickResta =() => {
        clickeo(contador -1)
      }
    
    
  return (
   <> <Contador clickSuma={clickSuma} clickResta={clickResta}
   
        />


    contador={contador}
   </>
  )
}

export default ContadorContainer