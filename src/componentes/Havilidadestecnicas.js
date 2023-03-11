import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Havilidadestecnicas(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2> Habilidades técnicas ensinadas:</h2>
            <p>
            •Internet 
            •Unix & Shell
            •Git
            •HTML 
            •CSS
            •Javascript
            •Testes Unitários em Javascript  
            </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}
/*  <h1>Módulo 1</h1>
            <h2>Fundamentos do Desenvolvimento Web</h2>*/