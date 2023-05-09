import React from 'react';
import { useNavigate, Route,Routes,NavLink, } from 'react-router-dom';
import Cursos from './componentes/Cursos';
import './Apprutas.css';
/*Import './Appmenulateral.css';*/
import logo from './logo.svg';
import Appmenulateral from './Appmenulateral'
import SobreNos from './componentes/SobreNos';
import Faleconnosco from './componentes/Faleconnosco';
import Oqueaprender from './componentes/Oqueaprender';
import Oqueaprender2 from './componentes/Oqueaprender2';
import Oqueaprender3 from './componentes/Oqueaprender3';
import Oqueaprender4 from './componentes/Oqueaprender4';
import Oquevoufazer from './componentes/Oquevoufazer';
import Oquevoufazer2 from './componentes/Oquevoufazer2';
import Oquevoufazer3 from './componentes/Oquevoufazer3';
import Oquevoufazer4 from './componentes/Oquevoufazer4';
import Havilidadestecnicas from './componentes/Havilidadestecnicas';
import Havilidadestecnicas2 from './componentes/Havilidadestecnicas2';
import Havilidadestecnicas3 from './componentes/Havilidadestecnicas3';
import Havilidadestecnicas4 from './componentes/Havilidadestecnicas4';
import Modulouno from './componentes/Modulouno';
import Modulodos from './componentes/Modulodos';
import Modulotres from './componentes/Modulotres';
import Moduloquatro from './componentes/Moduloquatro';
import App from './App';
import Apresentação from './componentes/Apresentação';
import { NoMatch } from './componentes/NoMatch';
function Apprutas() {

  const navigate = useNavigate()
  const goApp = () => {
    navigate("/App")
   }
  const goCursos = () => {
   navigate("/componentes/Cursos")
  }
  const goSobreNos = () => {
    navigate("/componentes/SobreNos")
   }
  const goFaleconnosco = () => {
   navigate("/componentes/Faleconnosco")
  }
  return(
    
      <div>
             <Appmenulateral/>
           <header className="App-header">
            <nav>
            <NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>   
            <p className="App-headerdos"> Instituto NU 
            <NavLink to= "/" style = { {  textDecoration : 'none' , color : "black" } } > “ Porque você vale muito...” </NavLink>
            </p> 
            <NavLink to ="/componentes/Apresentação"></NavLink>
            <button onMouseOver={goApp}>
              <NavLink  to ="/App" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} >Inscrição </NavLink>
            </button>
            <button onMouseOver={goCursos}>
              <NavLink to="/componentes/Cursos"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Cursos </NavLink>
            </button>
            <button onMouseOver={goSobreNos}>
              <NavLink to="/componentes/SobreNos"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Sobre nós </NavLink>
            </button>
            <button onMouseOver={goFaleconnosco}>
              <NavLink to="/componentes/Faleconnosco"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Fale Conosco </NavLink>
            </button>
		        </nav>   
           </header>
        
      
      <Routes>
        <Route exact path="/componentes/Apresentação/dummyquatro"element={<Apresentação />}/>
        <Route path="/App"element={<App />}/>
        <Route path="/componentes/Cursos"element={<Cursos />}>
            <Route path="modulouno" element={<Modulouno />} >
              <Route path='Oqueaprender' element={<Oqueaprender />}></Route>
              <Route path='Oquevoufazer' element={<Oquevoufazer />}></Route>
              <Route path='Havilidadestecnicas' element={<Havilidadestecnicas />}></Route>
            </Route>
            <Route path="modulodos" element={<Modulodos />}>
              <Route path='Oqueaprender2' element={<Oqueaprender2 />}></Route>
              <Route path='Oquevoufazer2' element={<Oquevoufazer2 />}></Route>
              <Route path='Havilidadestecnicas2' element={<Havilidadestecnicas2 />}></Route>
            </Route>
            <Route path="modulotres" element={<Modulotres />}>
              <Route path='Oqueaprender3' element={<Oqueaprender3 />}></Route>
              <Route path='Oquevoufazer3' element={<Oquevoufazer3 />}></Route>
              <Route path='Havilidadestecnicas3' element={<Havilidadestecnicas3 />}></Route>
            </Route>
            <Route path="moduloquatro" element={<Moduloquatro />}>
              <Route path='Oqueaprender4' element={<Oqueaprender4 />}></Route>
              <Route path='Oquevoufazer4' element={<Oquevoufazer4 />}></Route>
              <Route path='Havilidadestecnicas4' element={<Havilidadestecnicas4 />}></Route>
            </Route>
          </Route>
        <Route path="/componentes/SobreNos"element={<SobreNos />}/>
        <Route path="/componentes/Faleconnosco"element={<Faleconnosco />}/>
        <Route path="*"element={<NoMatch />}/>
      </Routes>
    </div>
    );
  }

export default Apprutas;
