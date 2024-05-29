import LogoPerson from './../../assets/images/Me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen container flex flex-col justify-center items-center relative overflow-hidden bg-personalBlue"
    >
      <div className="w-full max-w-6xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:text-left text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-personalBlue rounded-lg p-3">
                <div
                  className="rounded-full"
                  style={{
                    width: '350px',
                    height: '350px',
                    backgroundImage: `url(${LogoPerson})`,
                    backgroundSize: 'cover'
                  }}
                />
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-600 dark:text-black-200">
                Hola👋🏽
              </h5>
              <h1 className="sm:text-5xl text-4xl dark:text-black !leading-normal relative font-medium">
                Soy <span className="text-primary">Santiago</span> <br />
              </h1>
              <h5 className="font-medium text-gray-600 dark:text-black-200">
                Ingeniero de Software
              </h5>
            </div>
            <div className="flex items-center justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9">
              <p className="font-medium text-black">Encuéntrame aquí</p>
              <div className="flex justify-end gap-3 text-black">
                <a href="https://github.com/Santirevelo23" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/santiago___obando" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <p className="text-xs text-black text-balance leading-5 max-w-md px-2 mx-auto mt-4 md:mt-0 md:text-left text-center">
              Me considero una persona apasionada y comprometida con el desarrollo de mis labores diarias como el estudio, 
              el deporte, la convivencia con mi familia y amigos, todos los días me esfuerzo por aprender cosas nuevas y crecer profesionalmente. 
              Estoy emocionado de compartir mi trabajo y espero poder colaborar contigo en futuras oportunidades. 
              ¡Gracias por visitar mi portafolio!
            </p>
          </div>
          <div className="md:w-1/2 mt-9 md:mt-0">
            <ul className="text-2xl leading-[3.14rem] text-center pt-5 lg:block md:flex items-center justify-between text-black">
              <li>
                <span className="text-primary">Habilidades</span>
                <p className="text-xs text-balance leading-5 max-w-md px-2 mx-auto mt-2">
                  Considero que mis habilidades son el trabajo en equipo, la comunicación asertiva, pensamiento crítico, creatividad e innovación, entre otras. 
                  Las cuales me permiten establecer relaciones sólidas con mis compañeros y demás personas que me rodean, 
                  siendo mi objetivo desarrollarlas y apoyado en mi experiencia contribuir al éxito de proyectos emocionantes y desafiantes.
                </p>
              </li>
              <li>
                <span className="text-primary">Formación</span>
                <p className="text-xs text-balance leading-5 max-w-md px-2 mx-auto mt-2">
                  Educación primaria: Colegio Santo Domingo de Guzmán<br/>
                  Educación secundaria: Instituto Champagnat de Pasto<br/>
                  Educación profesional: Universidad Cooperativa de Colombia donde actualmente me encuentro cursando la carrera de Ingeniería de Software.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;