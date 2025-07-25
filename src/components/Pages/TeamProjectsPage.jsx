import TeamProjectsInfo from "../data/TeamProjectsInfo";
import BackgroundSquare from "../UI/BackgroundSquare";
import TeamCard from "../UI/TeamCard";
/**/
function TeamProjects() {
  return (
    <section className='relative pt-16 px-6 pb-32'>
      <div className=' absolute top-[17%] left-0 right-0 w-full h-[40%] -z-10'>
        <BackgroundSquare width='100%' height='100%' />
      </div>

      <h3 className='h3-title'>
        <span className='text-brand-color'>Design &</span> Team projects
      </h3>
      <div className='flex justify-center gap-14 sm:gap-8 flex-wrap'>
        {TeamProjectsInfo.map((project, index) => {
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
    </section>
  );
}

export default TeamProjects;
