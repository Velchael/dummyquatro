import React from "react";
import { Link } from 'react-router-dom';
import '../Apprutas.css';
export default function Oqueaprender(){
    
    return(
    <div>
    <form className="presenta_css">
           <div>
            <h1>Módulo 1</h1>
            <h2>Fundamentos do Desenvolvimento Web</h2>
            <h3> O que vou aprender?</h3>
            <p>Você vai explorar os princípios da Internet, da lógica de programação e criar códigos usando as linguagens mais requisitadas pelo mercado. Neste 1º módulo, ainda vai aprender a usar as principais ferramentas que programadores utilizam diariamente para a construção e implementação de projetos digitais.
            </p>
        <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
    </div>  
    </form>
    </div> 
    ) 
}

/*import React from 'react';
import { useNavigate, Link, Outlet} from 'react-router-dom';
const Oqueaprender = () => {
    const navigate = useNavigate()
    const goOqueaprender = () => {
        navigate("/componentes/Cursos/Oqueaprender")
    }
    const goOquevoufazer = () => {
        navigate("/componentes/Cursos/Oquevoufazer")
    }
    const goHavilidadestecnicas = () => {
        navigate("/componentes/Cursos/Havilidadestecnicas")
    }
    return (
        <div >
            <hr/>
            <div className="App-headerdos">
            <h3>Modulo uno Fundamentos do Desenvolvimento Web</h3>  
            <nav className="oldos_modulo">
            <button onMouseOver={goOqueaprender}>
             <Link to="/componentes/Cursos/Oqueaprender"style={{ textDecoration: 'none' }}>Modulo 1 </Link>
            </button> 
            <button onMouseOver={goOquevoufazer}>
             <Link to="/componentes/Cursos/oquevoufazer"style={{ textDecoration: 'none' }}>Modulo 2 </Link>
            </button>
            <button onMouseOver={goHavilidadestecnicas}>
             <Link to="/componentes/Cursos/Havilidadestecnicas"style={{ textDecoration: 'none' }}>Modulo 3 </Link>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Oqueaprender;*/