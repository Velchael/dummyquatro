import React from "react";
import '../Apprutas.css';
import { useNavigate, Link, Outlet} from 'react-router-dom';
export default function Moduloquatro(){
    const navigate = useNavigate()
    const goOqueaprender4 = () => {
        navigate("/componentes/Cursos/Moduloquatro/Oqueaprender4")
    }
    const goOquevoufazer4 = () => {
        navigate("/componentes/Cursos/Moduloquatro/Oquevoufazer4")
    }
    const goHavilidadestecnicas4 = () => {
        navigate("/componentes/Cursos/Moduloquatro/Havilidadestecnicas4")
    }
    return(
    <div>
    <hr/>
            <div className="App-headerdos">
            <h3>Modulo quatro, Ciência da computação </h3>  
            <nav className="oldos_modulo">
            <button onMouseOver={goOqueaprender4}>
             <Link to="/componentes/Cursos/Moduloquatro/Oqueaprender4"style={{ textDecoration: 'none' }}>O que vou aprender </Link>
            </button> 
            <button onMouseOver={goOquevoufazer4}>
             <Link to="/componentes/Cursos/Moduloquatro/oquevoufazer4"style={{ textDecoration: 'none' }}>O que vou fazer </Link>
            </button>
            <button onMouseOver={goHavilidadestecnicas4}>
             <Link to="/componentes/Cursos/Moduloquatro/Havilidadestecnicas4"style={{ textDecoration: 'none' }}>Havilidades tecnicas </Link>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
    </div> 
    ) 
}
/*
import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Moduloquatro(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>

          <h1>Módulo 4</h1>
            <h2>Ciência da computação</h2>
            <h3> O que vou aprender?</h3>
            <p>Python é uma linguagem popular nas áreas da tecnologia relacionadas à análise, pesquisa e coleta de dados, além das aplicações de inteligência artificial. O módulo tem como foco o aprendizado da linguagem, através da aplicação de técnicas de algoritmos e estrutura de dados
            </p>
            <h4>O que você será capaz de fazer no final do módulo?</h4> 
            <p>Ao final deste módulo, a pessoa estudante será capaz de usar a linguagem Python para construir algoritmos que permitem, por exemplo, coletar dados de qualquer página na Web, criar programas básicos e fazer automação de tarefas 
            </p>
        <h5>Habilidades técnicas ensinadas:</h5>
        <p>
            •Python
            •Algoritmos
            •Estrutura de Dados
            •Raspagem de Dados

        </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}
*/