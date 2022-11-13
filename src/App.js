import React, { createContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {BrowserRouter} from "react-router-dom"


export  const contexto = createContext()

const {Provider} = contexto


function App(){

  const valorDelContexto ={
        productos : [
      
      {id: 1 , nombre:"remeras", precio: 100, cantidad:2},
      {id: 2 , nombre:"lonmpa", precio: 200, cantidad:1},
    ], 
    cantidad: 3,
  }





    return ( 
   <Provider value={valorDelContexto}>
  <BrowserRouter>
       <Header/>
        <Main/>
        <Footer/>   
        </BrowserRouter> 
        </Provider>
      
      
        







    )
  }

  export default App