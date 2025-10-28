import { soloProjectsInfo } from '../data/ProjectsInfo';
import TeamCard from '../UI/cards/TeamCard';

function OwnProjects() {
  return (
    <div className='pt-20 pb-14 px-6'>
      <h3 className='h3-title mb-14'>My projects</h3>
      <div className='flex justify-center gap-8 flex-wrap items-stretch'>
        {soloProjectsInfo.map((project, index) => {
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
      </div>
    </div>
  );
}

export default OwnProjects;
