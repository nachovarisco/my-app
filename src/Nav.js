import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div><nav>

    <Link to ="productos"> productos  </Link>
    <Link to ="remeras"> remera    </Link>
    <Link to ="lompas">  lompasss   </Link>
    <Link to ="carrito">   carrito   </Link>
</nav></div>
  )
}

export default Nav