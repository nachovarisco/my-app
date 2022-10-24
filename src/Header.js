import React from "react";
import Nav from "./Nav";


function Header (prop){

    console.log(prop.nombre)
    console.log(prop.apellido)
    return (<>
    
        <header id="main-header">
         
                <p> nos agrada saber que {prop.nombre +"  "+ prop.apellido} esta en nuestra pagina</p>

            
            <Nav/>
            
        </header>
        </>
    )

}


export default Header