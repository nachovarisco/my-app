import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";


function Header (){

    return (<>
    
        <header id="main-header">
         

         <Link to = "/home" ><h2> aaaaaaa</h2></Link>

            
            <Nav/>
          
        </header>
        </>
    )

}


export default Header