import React ,{useRef} from 'react'






const Carrito = () => {


 
  
const refName = useRef()
const refEdad = useRef()



  const handleSubmit = (e) => {
  e.preventDefault()
  console.log(refName.current.value)
  console.log(refEdad.current.value)
  
}

  return (
    <div>
   <form onSubmit={handleSubmit}>
    <div className='container'>
      <input ref={ refName}         type= "text"/>
    </div>
    <div>
      <input  ref={refEdad}      type= "text"/>
    </div>
    <button> guardar    </button>
   </form>
    </div>
  )
}

export default Carrito