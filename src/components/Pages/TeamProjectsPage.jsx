import TeamProjectsInfo from "../data/TeamProjectsInfo";
import TeamCard from "../UI/TeamCard";

function TeamProjects() {
  return (
    <section className='pt-16 px-6 pb-32'>
      <h2 className='font-Montserrat-Alternates font-bold text-3xl pb-16'>
        <span className='text-brand-color'>Design &</span> Team projects
      </h2>
      <div className='flex justify-center gap-6'>
        {TeamProjectsInfo.map((project) => {
          return (
            <TeamCard
              title={project.name}
              img={project.img}
              year={project.year}
              descr={project.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default TeamProjects;
