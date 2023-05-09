// KindaCode.com
// src/App.js
import { useState } from 'react';
import './Appmenulateral.css';

function Appmenulateral() {
  // Declare a new state variable, which controls the visibility of the side menu
  const [isOpen, setIsOpen] = useState(false);
  //https://wwhttps://www.kindacode.com/cat/react/
  //w.kindacode.com

  // Toggle the side menu
  // This function is triggered when the open button or the close button is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Implement the menu */}
      <div className={`side-nav ${isOpen ? 'side-nav--active' : ''}`}>
        {/* The close button */}
        <button className='close-button' onClick={toggleMenu}>
          &times;
        </button>

        {/* Just some dummy links */}
        <a href="https://www.linkedin.com/in/velchael-mendez-b31106256">LinKedin</a>
        <a href="https://web.facebook.com/profile.php?id=100004807065957">Facebook</a>
        <a href="https://www.instagram.com/velchaelmendez/">Instagram</a>
        <a href="https://wa.me/5511981868794">WHatsApp</a>
        <div className='divider'></div>
        <a href="https://youtube.com/channel/UCA6X6RulyTFCU32odRUqIXA">YouTube</a>
        <a href='http://localhost:3000/dummyquatro'>Inicio</a>
        <a href='http://localhost:3000/dummyquatro/componentes/Cursos'>Sign Up Cursos</a>
      </div>

      {/* Page content */}
      <div className='container'>
        <h5>Active navegador lateral deslisante </h5>
        {/* The open button */}
        <button className='open-button' onClick={toggleMenu}>
          &#9776; click menu
        </button>
      </div>
    </>
  );
}

export default Appmenulateral;