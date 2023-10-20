import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="menu">
      <button onClick={toggleMenu} className="boton-hamburguesa">
        ☰
      </button>
      <div className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`}>
        <button className="cerrar-menu" onClick={toggleMenu}>
          Cerrar
        </button>
        <ul className="menu-lista">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Perfil</a></li>
          <li><a href="#">Configuración</a></li>
        </ul>
      </div>
      <div className="center-screen"> {/* Contenedor para centrar en pantalla */}
        <header className="cabecera">
          <h1>¡Bienvenido a my pet!</h1>
        </header>
        <section className="banner">
          <h2>Ama a tus mascotas un poco más.</h2>
        </section>
        <main className="contenido">
          <h2>Contenido Principal</h2>
          <p>Aquí puedes agregar el contenido principal de tu aplicación.</p>
          <img src="perro.jpg" alt="Descripción de la imagen" />
        </main>
      </div>
    </div>
  );
}

export default Menu;
