import React, { useState } from 'react';
import Image1 from './../../assets/images/Deportivo_Pasto.png';
import Image2 from './../../assets/images/Matias.png';
import Image3 from './../../assets/images/PiedraPeñol.png';
import Image4 from './../../assets/images/PueblitoPaisa.png';
import Image5 from './../../assets/images/SanAndres.png';
import Image6 from './../../assets/images/Transmilenio.png';
import Image7 from './../../assets/images/Ecuador.png';
import Image8 from './../../assets/images/Edificio.png';
import Image9 from './../../assets/images/Maquinita.png';
import Image10 from './../../assets/images/LaCocha.png';
import Image11 from './../../assets/images/Compañeros.png';
import Image12 from './../../assets/images/Carnaval.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('2024');

  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id='about' className='container-fluid min-h-screen d-flex justify-content-center align-items-center flex-column bg-personalBlue'>
      <div className='text-center text-black mt-10'>
        <h3>Galería <span role="img" aria-label="camera">📸</span></h3>
      </div>
      <div className='text-center text-black'>
        <p className='px-2 mt-3'>
          Aquí encontrarán un poco de mis vivencias, experiencias,
          lugares visitados y momentos disfrutados con amigos y familia.
        </p>
      </div>
      <div className='text-center text-black mt-3'>
        <p>Categorías</p>
        <div className='btn-group' role='group' aria-label='Basic outlined example'>
          <button type='button' className={`btn btn-outline-primary ${activeCategory === '2024' ? 'active' : ''}`} onClick={() => changeCategory('2024')}>2024</button>
          <button type='button' className={`btn btn-outline-primary ${activeCategory === '2023' ? 'active' : ''}`} onClick={() => changeCategory('2023')}>2023</button>
          <button type='button' className={`btn btn-outline-primary ${activeCategory === '2022' ? 'active' : ''}`} onClick={() => changeCategory('2022')}>2022</button>
        </div>
      </div>
      <div className='mt-5 text-black'>
        {activeCategory === '2024' && (
          <>
            <h2><strong>2024</strong></h2>
            <div id="carousel2024" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img src={Image2} className="d-block w-100 rounded" alt="Imagen 2024 2" />
                </div>
                <div className="carousel-item">
                  <img src={Image5} className="d-block w-100 rounded" alt="Imagen 2024 3" />
                </div>
                <div className="carousel-item active">
                  <img src={Image7} className="d-block w-100 rounded" alt="Imagen 2024 1" />
                </div>
                <div className="carousel-item">
                  <img src={Image12} className="d-block w-100 rounded" alt="Imagen 2024 4" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carousel2024" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carousel2024" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </>
        )}
        {activeCategory === '2023' && (
          <>
            <h2><strong>2023</strong></h2>
            <div id="carousel2023" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Image3} className="d-block w-100 rounded" alt="Imagen 2023 1" />
                </div>
                <div className="carousel-item">
                  <img src={Image4} className="d-block w-100 rounded" alt="Imagen 2023 2" />
                </div>
                <div className="carousel-item">
                  <img src={Image8} className="d-block w-100 rounded" alt="Imagen 2023 3" />
                </div>
                <div className="carousel-item">
                  <img src={Image9} className="d-block w-100 rounded" alt="Imagen 2024 4" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carousel2023" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carousel2023" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </>
        )}
        {activeCategory === '2022' && (
          <>
            <h2><strong>2022</strong></h2>
            <div id="carousel2022" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img src={Image1} className="d-block w-100 rounded" alt="Imagen 2022 1" />
                </div>
                <div className="carousel-item active">
                  <img src={Image6} className="d-block w-100 rounded" alt="Imagen 2022 2" />
                </div>
                <div className="carousel-item">
                  <img src={Image10} className="d-block w-100 rounded" alt="Imagen 2022 3" />
                </div>
                <div className="carousel-item">
                  <img src={Image11} className="d-block w-100 rounded" alt="Imagen 2022 4" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carousel2022" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carousel2022" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
