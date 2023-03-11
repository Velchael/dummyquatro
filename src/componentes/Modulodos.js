import React from "react";
import '../Apprutas.css';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';
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
             <NavLink to="/componentes/Cursos/Modulodos/Oqueaprender2"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>O que vou aprender </NavLink>
            </button> 
            <button onMouseOver={goOquevoufazer2}>
             <NavLink to="/componentes/Cursos/Modulodos/oquevoufazer2"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>O que vou fazer </NavLink>
            </button>
            <button onMouseOver={goHavilidadestecnicas2}>
             <NavLink to="/componentes/Cursos/Modulodos/Havilidadestecnicas2"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Havilidades tecnicas </NavLink>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
    </div> 
    ) 
}

