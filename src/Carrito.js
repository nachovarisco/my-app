import React ,{useState} from 'react'






const Carrito = () => {


  const [valores, setValores] = useState ({
    name:"",
    edad :""
  })
   
  

const handleChange = (e) => {
 setValores  ({

  ...valores,         
  [e.target.dataset.target] : e.target.value
 })


}

  const handleSubmit = (e) => {
  e.preventDefault()
  console.log(valores)
  
}

  return (
    <div>
   <form onSubmit={handleSubmit}>
    <div className='container'>
      <input data-target =  "name"  type= "text" onChange={handleChange}/>
    </div>
    <div>
      <input data-target = "edad" type= "text" onChange={handleChange}/>
    </div>
    <button> guardar    </button>
   </form>
    </div>
  )
}

export default Carrito