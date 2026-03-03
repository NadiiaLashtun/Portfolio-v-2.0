import Wrapper from '../Wrapper';
import { teamProjectsInfo } from '../data/ProjectsInfo';
import BackgroundSquare from '../UI/BackgroundSquare';
import TeamCard from '../UI/cards/TeamCard';
import Slider from '../UI/Slider';

function TeamProjects() {
  return (
    <section className='py-8 sm:py-16'>
      <Wrapper className='relative '>
        <div className=' absolute top-[17%] left-0 right-0 w-full h-[40%] -z-10'>
          <BackgroundSquare
            width='100%'
            height='100%'
          />
        </div>

        <h2 className='title-small'>
          <span className='text-brand-color'>Team</span> projects
        </h2>

        <Slider slidesPerView={2}>
          {teamProjectsInfo.map((project, index) => {
            return (
              <TeamCard
                title={project.name}
                img={project.img}
                descr={project.description}
                netlify={project.netlify}
                github={project.github}
                key={index}
              />
            );
          })}
        </Slider>
      </Wrapper>
    </section>
  );
}

export default TeamProjects;
