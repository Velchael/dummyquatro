import React from "react";
import '../Apprutas.css';
import { useNavigate, Link, Outlet} from 'react-router-dom';
export default function Modulotres(){
    const navigate = useNavigate()
    const goOqueaprender3 = () => {
        navigate("/componentes/Cursos/Modulotres/Oqueaprender3")
    }
    const goOquevoufazer3 = () => {
        navigate("/componentes/Cursos/Modulotres/Oquevoufazer3")
    }
    const goHavilidadestecnicas3 = () => {
        navigate("/componentes/Cursos/Modulotres/Havilidadestecnicas3")
    }
    return(
    <div>
    <hr/>
            <div className="App-headerdos">
            <h3>Modulo tres, Back-End</h3>  
            <nav className="oldos_modulo">
            <button onMouseOver={goOqueaprender3}>
             <Link to="/componentes/Cursos/Modulotres/Oqueaprender3"style={{ textDecoration: 'none' }}>O que vou aprender </Link>
            </button> 
            <button onMouseOver={goOquevoufazer3}>
             <Link to="/componentes/Cursos/Modulotres/oquevoufazer3"style={{ textDecoration: 'none' }}>O que vou fazer </Link>
            </button>
            <button onMouseOver={goHavilidadestecnicas3}>
             <Link to="/componentes/Cursos/Modulotres/Havilidadestecnicas3"style={{ textDecoration: 'none' }}>Havilidades tecnicas </Link>
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
export default function Modulotres(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
      <h1>Módulo 3</h1>
            <h2>Desenvolvimento Back-end</h2>
            <h3> O que vou aprender?</h3>
            <p>Você vai estudar a parte do desenvolvimento de sites e apps do lado do servidor. Ou seja, vai entender, por exemplo, como um banco de dados é capaz de alimentar um portal com informações que o usuário deseja e o que ocorre nos bastidores do funcionamento de um site.
            </p>
            <h4>O que você será capaz de fazer no final do módulo?</h4> 
            <p>Ao final do curso, você estará preparado para executar tarefas de uma pessoa desenvolvedora ou programadora backend. O módulo permitirá que a pessoa estudante crie interfaces de comunicação entre sistemas (APIs), faça consultas em banco de dados, crie testes (unitários e de integração) e configure tecnologias que fazem um site funcionar
            </p>
        <h5>Habilidades técnicas ensinadas:</h5>
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
*/