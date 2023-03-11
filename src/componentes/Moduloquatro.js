import React from "react";
import '../Apprutas.css';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';
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
             <NavLink to="/componentes/Cursos/Moduloquatro/Oqueaprender4"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>O que vou aprender</NavLink>
             </button>
            <button onMouseOver={goOquevoufazer4}>
             <NavLink to="/componentes/Cursos/Moduloquatro/oquevoufazer4"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>O que vou fazer </NavLink>
            </button>
            <button onMouseOver={goHavilidadestecnicas4}>
             <NavLink to="/componentes/Cursos/Moduloquatro/Havilidadestecnicas4"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Havilidades tecnicas </NavLink>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
    </div> 
    ) 
}
