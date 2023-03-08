import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Havilidadestecnicas4(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
           <h1>Módulo 4</h1>
           <h2>Ciência da computação</h2>
           <h5>Habilidades técnicas ensinadas:</h5>
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