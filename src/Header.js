import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";


function Header (){

    return (<>
    
        <header id="main-header">
         

         <Link to = "/start " ><h2> buenassss</h2></Link>

            
            <Nav/>
          
        </header>
        </>
    )

}


export default Header