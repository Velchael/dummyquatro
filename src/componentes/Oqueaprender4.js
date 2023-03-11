import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Oqueaprender4(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2> O que vou aprender?</h2>
            <p>Python é uma linguagem popular nas áreas da tecnologia relacionadas à análise, pesquisa e coleta de dados, além das aplicações de inteligência artificial. O módulo tem como foco o aprendizado da linguagem, através da aplicação de técnicas de algoritmos e estrutura de dados
            </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}