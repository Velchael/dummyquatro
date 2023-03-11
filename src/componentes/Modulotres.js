import React from "react";
import '../Apprutas.css';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';
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
             <NavLink to="/componentes/Cursos/Modulotres/Oqueaprender3"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>O que vou aprender </NavLink>
            </button> 
            <button onMouseOver={goOquevoufazer3}>
             <NavLink to="/componentes/Cursos/Modulotres/oquevoufazer3"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>O que vou fazer </NavLink>
            </button>
            <button onMouseOver={goHavilidadestecnicas3}>
             <NavLink to="/componentes/Cursos/Modulotres/Havilidadestecnicas3"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Havilidades tecnicas </NavLink>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
    </div> 
    ) 
}
