import React from 'react'
import{Routes, Route} from "react-router-dom"
import Contador from './Contador'
import ContadorContainer from './ContadorContainer'
import UserContainer from './UserContainer'

const Main = () => {
  return (
    <main>
      <Routes>

        {/* index */}
        <Route  path='/start'  element={<p>home</p>}  />
        {/* productos y categoria*/}
        <Route path='/productos' element = {<UserContainer/>}/>
        {/* carrito */}
        <Route path='/carrito' element = {<ContadorContainer/>}/>
        <Route path='*' element = {<h1>ERROR 404 NOT FOUND</h1>}   />
      </Routes>

    </main>
  )
}

export default Main