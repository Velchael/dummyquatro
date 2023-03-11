import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Oquevoufazer(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2> O que você será capaz de fazer no final do módulo?</h2>
            <p>Você será capaz de entender como uma pessoa programadora trabalha, desenvolvendo o raciocínio aplicado à formulação e resolução de problemas computacionais. 
                Ainda vai aprender a criar páginas na web, escrever algoritmos básicos, criar e testar códigos que possibilitam o funcionamento correto de programas e aplicações web.</p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}
/*<h1>Módulo 1</h1>
<h2>Fundamentos do Desenvolvimento Web</h2>*/