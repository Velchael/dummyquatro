import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Havilidadestecnicas2(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
           <h1>Módulo 2</h1>
            <h2>Desenvolvimento Front-end</h2>
            <h5>Habilidades técnicas ensinadas:</h5>
            <p>
             •HTML
             •CSS
             •Javascript
             •React e Testes Unitários
            </p>
             <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
           </div>  
    </form>
    </div> 
    ) 
}