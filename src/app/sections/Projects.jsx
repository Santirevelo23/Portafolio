import React, { useState } from 'react';
import Proyecto1 from './../../assets/images/peliculas.png';
import Proyecto2 from './../../assets/images/Recetario.png';
import Proyecto3 from './../../assets/images/TiendaOnline.png';
import Proyecto4 from './../../assets/images/TorreFideos.png';

const projects = [
  { id: 1, image: Proyecto1, title: 'API Streaming', subtitle: 'API Streaming', description: 'Proyecto realizado usando Apis con javaScript y un frontend enfocado a angular, permitiendo el consumo de películas y series, con la posibilidad de agregar, modificar y eliminar las películas o series' },
  { id: 2, image: Proyecto2, title: 'Recetario Restaurante', subtitle: 'Recetario Restaurante', description: 'Un proyecto desarrollado en Java que facilitaba la creación, eliminación y visualización detallada de recetas para un restaurante.' },
  { id: 3, image: Proyecto3, title: 'TiendaOnline', subtitle: 'TiendaOnline', description: 'Un proyecto que conectamos a una base de datos en Azure' },
  { id: 4, image: Proyecto4, title: 'TorreFideos', subtitle: 'TorreFideos', description: 'Un proyecto para mejorar el trabajo en equipo.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseCard = () => {
    setSelectedProject(null);
  };

  return (
    <section id='projects' className='container-fluid min-h-screen flex-center bg-personalBlue'>
      <div className='text-center text-black w-full'>
        <h3>Proyectos</h3>
        <p className='px-2 mt-3'>
          Aquí puedes explorar y conocer algunos de mis trabajos, actividades y proyectos realizados a lo largo de mi carrera, los cuales me han permitido desarrollar todas mis habilidades y destrezas para el cumplimiento de mi objetivo es posicionarme como un excelente desarrollador de software.
        </p>
        <div className='row row-cols-1 row-cols-md-2 g-4 mt-5'>
          {projects.map((project) => (
            <div key={project.id} className='col-md-6'>
              <div className='card'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='card-img-top'
                  onClick={() => handleImageClick(project)}
                  title={project.description}
                  style={{ cursor: 'pointer' }} // Establecer el cursor como un puntero
                />
                <div className='card-body'>
                  <h5 className='card-title'>{project.title}</h5>
                  <p className='card-text'>{project.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex-center z-50'>
            <div className='bg-white rounded-lg p-6 relative max-w-sm w-full'>
              <button
                className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
                onClick={handleCloseCard}
              >
                &times;
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className='w-full h-auto rounded-md' />
              <h4 className='mt-4 text-2xl font-bold text-black'>{selectedProject.title}</h4>
              <p className='mt-2 text-gray-700'>{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
