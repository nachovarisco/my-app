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
    <div>
        <button onClick={handleSumar}>+</button>
        <p>{count}</p>
        <button onClick={handleRestar}>-</button>
    </div>
<button onClick={handleConfirmar}> confirmar</button>
    </div>
  )
}

export default ItemCount