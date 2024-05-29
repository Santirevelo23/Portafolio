import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="fixed xl:block w-full py-4 lg:px-0 px-5 z-[999] duration-300">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-2">
        <div className="flex gap-4 items-center">
          <div className="bg-primary text-white rounded-full size-10 text-xl grid place-items-center">
            P
          </div>
          <div>
            <h4 className="font-bold text-black text-lg uppercase">Portfolio</h4>
            <p className="text-xs text-black">Santiago</p>
          </div>
        </div>
        <ul className="flex flex-col md:flex-row gap-10 text-black hover:*:text-primary *:duration-200">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Galería</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li className="theme-switch">
            <i className="fa-solid fa-circle-half-stroke cursor-pointer"></i>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <a href="#contact">
            <button className="btn btn-outline md:flex hidden">
              <i className="fa-regular fa-paper-plane"></i> ¡Vamos a hablar!
            </button>
          </a>
          <span className="theme-switch md:hidden">
            <i className="fa-solid fa-circle-half-stroke cursor-pointer"></i>
          </span>
          <span id="menubar" className="cursor-pointer md:hidden text-xl">
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;