const Footer = () => {
  return (
    <footer className="dark:bg-slate-700 bg-slate-100 text-center py-2">
      Santiago Obando &copy; 2024
      <ul className="flex-center gap-5 py-4 text-sm">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#about">Galeria</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contactame</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;