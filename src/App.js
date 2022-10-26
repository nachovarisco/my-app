import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import UserContainer from "./UserContainer";



function App(){
    return (
       <>
       <Header nombre="carlos"
               apellido="tevez"
               />

               <main>
        <Main/>

<div id="userCnt">
      <UserContainer/>
      </div>

        

        </main>
        <Footer/>     
        </>







    )
  }

  export default App