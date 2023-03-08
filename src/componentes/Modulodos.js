import React from "react";
import '../Apprutas.css';
import { useNavigate, Link, Outlet} from 'react-router-dom';
export default function Modulodos(){
    const navigate = useNavigate()
    const goOqueaprender2 = () => {
        navigate("/componentes/Cursos/Modulodos/Oqueaprender2")
    }
    const goOquevoufazer2 = () => {
        navigate("/componentes/Cursos/Modulodos/Oquevoufazer2")
    }
    const goHavilidadestecnicas2 = () => {
        navigate("/componentes/Cursos/Modulodos/Havilidadestecnicas2")
    }
    return(
    <div>
    <hr/>
            <div className="App-headerdos">
            <h3>Modulo dos, Front-End</h3>  
            <nav className="oldos_modulo">
            <button onMouseOver={goOqueaprender2}>
             <Link to="/componentes/Cursos/Modulodos/Oqueaprender2"style={{ textDecoration: 'none' }}>O que vou aprender </Link>
            </button> 
            <button onMouseOver={goOquevoufazer2}>
             <Link to="/componentes/Cursos/Modulodos/oquevoufazer2"style={{ textDecoration: 'none' }}>O que vou fazer </Link>
            </button>
            <button onMouseOver={goHavilidadestecnicas2}>
             <Link to="/componentes/Cursos/Modulodos/Havilidadestecnicas2"style={{ textDecoration: 'none' }}>Havilidades tecnicas </Link>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
    </div> 
    ) 
}

/*import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Modulodos(){
    
    return(
    <div>
    <form className="presenta_css">
     <div>
        <h1>Módulo 2</h1>
            <h2>Desenvolvimento Front-end</h2>
            <h3> O que vou aprender?</h3>
            <p> O módulo vai concentrar o aprendizado nas três linguagens que permitem um site ter funcionalidades: HTML (responsável por estruturar uma página), CSS (linguagem de cores e estilos) e o Javascript (que traz o dinamismo e vida para páginas da web). As aulas cobrem o aprendizado essencial para aprender a construir aplicações.
            </p>
            <h4>O que você será capaz de fazer no final do módulo?</h4> 
            <p>Projetar, criar e dar vida às páginas de um site ou aplicativo como uma pessoa desenvolvedora ou programadora. Você terá a compreensão dos princípios do front-end (a interface gráfica do usuário em um site), além de escrever os códigos para montar projetos interativos do zero. 
           </p>
        <h5>Habilidades técnicas ensinadas:</h5>
       <p>
       •HTML
       •CSS
       •Javascript
       •React e Testes Unitários
       </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}*/