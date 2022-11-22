import React, {useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {BrowserRouter} from "react-router-dom"
import CartProvider from "./CartProvider";

import {app, db} from "./firebase"
console.log  (app + db )



function App(){




    return ( 
      <>
      <CartProvider contenido = {  
       <BrowserRouter>
       <Header/>
       <Main/>
       <Footer/>   
       </BrowserRouter>} 
       />
        
        
       
      
        </>
        







    )
  }

  export default App