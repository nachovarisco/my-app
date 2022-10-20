import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./estilos.css"




const elemento_del_dom = document.getElementById('root');
const root = ReactDOM.createRoot(elemento_del_dom);
root.render(<App/>);