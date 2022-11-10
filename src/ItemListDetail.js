import React from 'react'
import Item from './Item'

const ItemListDetail = (items) => {
  return (
    <>
    <section >
    
    {items.map((item)=>{
        return <Item key={item.id} {...item}/>
        
    })
    }
    
    </section>
    
    </>
  )
}

export default ItemListDetail