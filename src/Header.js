import React from "react";
import Nav from "./Nav";


function Header (prop){

    console.log(prop.nombre)
    console.log(prop.apellido)
    return (<>
    
        <header id="main-header">
            <h1>
                Varisweb
                <p>holisssssssss</p>
                <p> nos agrada saber que {prop.nombre +"  "+ prop.apellido} esta en nuestra pagina</p>

            </h1>
            <Nav/>
            
        </header>
        </>
    )

}


export default Header