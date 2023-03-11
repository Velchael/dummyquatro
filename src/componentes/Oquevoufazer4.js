import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function oquevoufazer4(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2>O que você será capaz de fazer no final do módulo?</h2> 
            <p>Ao final deste módulo, a pessoa estudante será capaz de usar a linguagem Python para construir algoritmos que permitem, por exemplo, coletar dados de qualquer página na Web, criar programas básicos e fazer automação de tarefas 
            </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}
/*  <h1>Módulo 4</h1>
            <h2>Ciência da computação</h2>*/