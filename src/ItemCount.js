import React, { useState } from 'react'

const ItemCount = ({handleOnAdd, init}) => {




    const [count, setCount] = useState(init)

    const handleSumar = () => {
        setCount(count + 1 )
    }

    const handleRestar = () => {
        setCount(count - 1 )
        
       }

    const handleConfirmar = () => {
        handleOnAdd(count)
    }

  return (
    <div>
    <div id='itemCount'>
        <button id='itemCount_sumar' onClick={handleSumar}>+</button>
        <p>{count}</p>
        <button id='itemCount_restar' onClick={handleRestar}>-</button>
    </div>
<button id='itemCount_confirmar' onClick={handleConfirmar}> confirmar cantidad</button>
    </div>
  )
}

export default ItemCount