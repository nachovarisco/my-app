import React from 'react'
import { Button } from 'antd';

const Contador = ({clickSuma, clickResta, Contador}) => {



  return (
  <>
   <>
    <main>
   

<Button onClick={clickSuma}>suma</Button>


<Button onClick={clickResta}>resta</Button>




</main>
 </> </>

  )
}

export default Contador