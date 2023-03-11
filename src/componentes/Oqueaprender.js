import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Oqueaprender(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2> O que vou aprender?</h2>
            <p>Você vai explorar os princípios da Internet, da lógica de programação e criar códigos usando as linguagens mais requisitadas pelo mercado. Neste 1º módulo, ainda vai aprender a usar as principais ferramentas que programadores utilizam diariamente para a construção e implementação de projetos digitais.
            </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}

/*/<h1>Módulo 1</h1>
            <h2>Fundamentos do Desenvolvimento Web</h2>*/