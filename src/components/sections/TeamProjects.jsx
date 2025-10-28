import { teamProjectsInfo } from '../data/ProjectsInfo';
import BackgroundSquare from '../UI/BackgroundSquare';
import TeamCard from '../UI/cards/TeamCard';
import Slider from '../UI/Slider';
/**/
function TeamProjects() {
  return (
    <section className='relative pt-16 px-6 pb-8 md:pb-32'>
      <div className=' absolute top-[17%] left-0 right-0 w-full h-[40%] -z-10'>
        <BackgroundSquare
          width='100%'
          height='100%'
        />
      </div>

      <h3 className='h3-title'>
        <span className='text-brand-color'>Team</span> projects
      </h3>

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
    </section>
  );
}

export default TeamProjects;
