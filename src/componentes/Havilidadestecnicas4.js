import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Havilidadestecnicas4(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
           <h2>Habilidades técnicas ensinadas:</h2>
           <p>
            •Python
            •Algoritmos
            •Estrutura de Dados
            •Raspagem de Dados
            </p>
             <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
           </div>  
    </form>
    </div> 
    ) 
}