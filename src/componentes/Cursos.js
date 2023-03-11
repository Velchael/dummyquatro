import React from 'react';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';
const Cursos = () => {

    const navigate = useNavigate()

    const goModulouno = () => {
        navigate("/componentes/Cursos/Modulouno")
    }
    const goModulodos = () => {
        navigate("/componentes/Cursos/Modulodos")
    }
    const goModulotres = () => {
        navigate("/componentes/Cursos/Modulotres")
    }
    const goModuloquatro = () => {
        navigate("/componentes/Cursos/Moduloquatro")
    }
    return (
        <div >
            <hr/>
            <div className="App-headerdos">
            <h3>Cursos Instituto NU</h3>  
            <nav className="oldos_modulo">
            <button onMouseOver={goModulouno}>
             <NavLink to="/componentes/Cursos/Modulouno" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} >Modulo 1 </NavLink>
            </button> 
            <button onMouseOver={goModulodos}>
             <NavLink to="/componentes/Cursos/Modulodos"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Modulo 2 </NavLink>
            </button>
            <button onMouseOver={goModulotres}>
             <NavLink to="/componentes/Cursos/Modulotres"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Modulo 3 </NavLink>
            </button>
            <button onMouseOver={goModuloquatro}>
             <NavLink to="/componentes/Cursos/Moduloquatro"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Modulo 4</NavLink>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Cursos;
