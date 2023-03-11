import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Oqueaprender2(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2> O que vou aprender?</h2>
            <p> O módulo vai concentrar o aprendizado nas três linguagens que permitem um site ter funcionalidades: HTML (responsável por estruturar uma página), CSS (linguagem de cores e estilos) e o Javascript (que traz o dinamismo e vida para páginas da web). As aulas cobrem o aprendizado essencial para aprender a construir aplicações.
            </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}
/*  <h1>Módulo 2</h1>
            <h2>Desenvolvimento Front-end</h2>*/