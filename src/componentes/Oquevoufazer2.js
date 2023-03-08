import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function oquevoufazer2(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h1>Módulo 2</h1>
            <h2>Desenvolvimento Front-end</h2>
            <h4>O que você será capaz de fazer no final do módulo?</h4> 
            <p>Projetar, criar e dar vida às páginas de um site ou aplicativo como uma pessoa desenvolvedora ou programadora. Você terá a compreensão dos princípios do front-end (a interface gráfica do usuário em um site), além de escrever os códigos para montar projetos interativos do zero. 
           </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}