import ProjectCard from '../UI/cards/ProjectCard';
import Img from '../../assets/img.png';
import Button from '../UI/buttons/Button';
import BackgroundText from '../UI/BackgroundText';
import BackgroundSquare from '../UI/BackgroundSquare';
import { soloProjectsInfo } from '../data/ProjectsInfo';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section
      className='relative pt-[120px] pb-[60px] px-[30px] sm:px-[60px]'
      id='portfolio-page'
    >
      <h3 className='h3-title'>Portfolio</h3>

      <div className='relative flex flex-col items-center gap-32'>
        <h2 className='h2-title absolute -right-[10%] sm:-right-[5%] lg:-right-[3.5%] top-[29%] md:top-[26%] lg:top-[30%] text-right'>
          Portfolio <br /> <span className='font-Montserrat'>/</span>
        </h2>
        <BackgroundText
          text='portfolio'
          left='55%'
          top='22%'
        />
        <div className='flex flex-col gap-32'>
          {soloProjectsInfo.map((project, index) => {
            return (
              <ProjectCard
                projectName={project.name}
                img={project.img}
                descr={project.description}
                netlify={project.netlify}
                github={project.github}
                flip={project.flip}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className='inline-block mx-auto pt-20'>
        <Link to='projects'>
          <Button caption='More projects' />
        </Link>
      </div>
      <div className=' absolute bottom-[10%] left-[2%] w-[20%] h-[35%]'>
        <BackgroundSquare
          width='100%'
          height='100%'
        />
      </div>
    </section>
  );
}

export default Portfolio;
