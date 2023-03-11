import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Havilidadestecnicas3(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2>Habilidades técnicas ensinadas:</h2>
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