import React, { useState } from 'react'

const ItemCount = ({handleOnAdd}) => {




    const [count, setCount] = useState(0)

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
<button id='itemCount_confirmar' onClick={handleConfirmar}> confirmar</button>
    </div>
  )
}

export default ItemCount