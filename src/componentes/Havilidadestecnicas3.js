import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Havilidadestecnicas3(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
           <h1>Módulo 3</h1>
            <h2>Desenvolvimento Back-end</h2>
            <h5>Habilidades técnicas ensinadas:</h5>
            <p>
            •Banco de Dados
            •SQL
            •NoSQL
            •Server-Side
            •Deploy
            •Node
            •Express.JS
            •ORM
            •Docker
            •Testes Unitários
            •Testes de Integração
          </p>
             <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
           </div>  
    </form>
    </div> 
    ) 
}