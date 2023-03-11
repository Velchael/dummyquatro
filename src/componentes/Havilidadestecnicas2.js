import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Havilidadestecnicas2(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2>Habilidades técnicas ensinadas:</h2>
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