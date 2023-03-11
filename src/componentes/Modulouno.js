import React from 'react';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';
const Modulouno = () => {
    const navigate = useNavigate()
    const goOqueaprender = () => {
        navigate("/componentes/Cursos/Modulouno/Oqueaprender")
    }
    const goOquevoufazer = () => {
        navigate("/componentes/Cursos/Modulouno/Oquevoufazer")
    }
    const goHavilidadestecnicas = () => {
        navigate("/componentes/Cursos/Modulouno/Havilidadestecnicas")
    }
    return (
        <div >
            <hr/>
            <div className="App-headerdos">
            <h3>Modulo um, Fundamentos do Desenvolvimento Web</h3>  
            <nav className="oldos_modulo">
            <button onMouseOver={goOqueaprender}>
             <NavLink to="/componentes/Cursos/Modulouno/Oqueaprender"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>O que vou aprender </NavLink>
            </button> 
            <button onMouseOver={goOquevoufazer}>
             <NavLink to="/componentes/Cursos/Modulouno/oquevoufazer"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>O que vou fazer </NavLink>
            </button>
            <button onMouseOver={goHavilidadestecnicas}>
             <NavLink to="/componentes/Cursos/Modulouno/Havilidadestecnicas"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Havilidades tecnicas </NavLink>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Modulouno;
