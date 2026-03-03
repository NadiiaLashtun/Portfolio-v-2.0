import Container from '../Wrapper';
import { soloProjectsInfo } from '../data/ProjectsInfo';
import TeamCard from '../UI/cards/TeamCard';
import Wrapper from '../Wrapper';

function OwnProjects() {
  return (
    <div className='pt-20 pb-14'>
      <Wrapper>
        <h2 className='title-small mb-14'>My projects</h2>
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
      </Wrapper>
    </div>
  );
}

export default OwnProjects;
