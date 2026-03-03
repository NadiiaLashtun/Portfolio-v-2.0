import ProjectCard from '../UI/cards/ProjectCard';
import Button from '../UI/buttons/Button';
import BackgroundText from '../UI/BackgroundText';
import BackgroundSquare from '../UI/BackgroundSquare';
import { soloProjectsInfo } from '../data/ProjectsInfo';
import { HashLink } from 'react-router-hash-link';
import Wrapper from '../Wrapper';

function Portfolio() {
  return (
    <section
      className='py-16 lg:py-28'
      id='portfolio-page'
    >
      <Wrapper className='relative'>
        <h2 className='title-small'>Portfolio</h2>

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
          <HashLink to='/projects'>
            <Button caption='More projects' />
          </HashLink>
        </div>
        <div className=' absolute bottom-[10%] left-[2%] w-[20%] h-[35%]'>
          <BackgroundSquare
            width='100%'
            height='100%'
          />
        </div>
      </Wrapper>
    </section>
  );
}

export default Portfolio;
