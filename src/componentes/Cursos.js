import React from 'react';
import { useNavigate, Link, Outlet} from 'react-router-dom';
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
             <Link to="/componentes/Cursos/Modulouno"style={{ textDecoration: 'none' }}>Modulo 1 </Link>
            </button> 
            <button onMouseOver={goModulodos}>
             <Link to="/componentes/Cursos/Modulodos"style={{ textDecoration: 'none' }}>Modulo 2 </Link>
            </button>
            <button onMouseOver={goModulotres}>
             <Link to="/componentes/Cursos/Modulotres"style={{ textDecoration: 'none' }}>Modulo 3 </Link>
            </button>
            <button onMouseOver={goModuloquatro}>
             <Link to="/componentes/Cursos/Moduloquatro"style={{ textDecoration: 'none' }}>Modulo 4</Link>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Cursos;

/*import React from 'react';
import { Link, Outlet} from 'react-router-dom';
const Cursos = () => {
    return (
        <div >
            <hr/>
            <div className="App-headerdos">
            <h3>Cursos Instituto NU</h3>  
            <nav className="oldos_modulo">
             <Link to="/componentes/Cursos/Modulouno"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 1 </Link>
             <Link to="/componentes/Cursos/Modulodos"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 2 </Link>
             <Link to="/componentes/Cursos/Modulotres"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 3 </Link>
             <Link to="/componentes/Cursos/Moduloquatro"className="atres_modulo"style={{ textDecoration: 'none' }}>Modulo 4</Link>
             </nav>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Cursos;*/