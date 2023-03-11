import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function oquevoufazer3(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h2>O que você será capaz de fazer no final do módulo?</h2> 
            <p>Ao final do curso, você estará preparado para executar tarefas de uma pessoa desenvolvedora ou programadora backend. O módulo permitirá que a pessoa estudante crie interfaces de comunicação entre sistemas (APIs), faça consultas em banco de dados, crie testes (unitários e de integração) e configure tecnologias que fazem um site funcionar
            </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}
/*<h1>Módulo 3</h1>
<h2>Desenvolvimento Back-end</h2>*/