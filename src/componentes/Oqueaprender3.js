import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Oqueaprender3(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h1>Módulo 3</h1>
            <h2>Desenvolvimento Back-end</h2>
            <h3> O que vou aprender?</h3>
            <p>Você vai estudar a parte do desenvolvimento de sites e apps do lado do servidor. Ou seja, vai entender, por exemplo, como um banco de dados é capaz de alimentar um portal com informações que o usuário deseja e o que ocorre nos bastidores do funcionamento de um site.
            </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}