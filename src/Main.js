import React, { useState }from 'react'
import { Button } from 'antd';


const Main = () => {


const estado = useState(0)
const contador = estado[0]
const clickeo = estado[1]






  let clickSuma = () => {

    clickeo(contador + 1)
   

  }


  let clickResta =() => {
    clickeo(contador -1)
  }





  return (
    <>
    <main>
   <div className='container'>
<Button onClick={clickSuma}>suma</Button>
<Button onClick={clickResta}>resta</Button>
<p>Contador : {contador}</p>

</div>
</main>
 </>

        
  )
}

export default Main

