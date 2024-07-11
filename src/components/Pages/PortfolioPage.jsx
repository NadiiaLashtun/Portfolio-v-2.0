import ProjectCard from "../UI/ProjectCard";
import ProjectCardRight from "../UI/ProjectCardRight";
import Img from "../../assets/img.png";
import Button from "../UI/Button";

function Portfolio() {
  return (
    <section>
      <h3 className=' mb-11 font-Montserrat-Alternates font-bold text-4xl'>
        Portfolio
      </h3>
      <div className='relative flex flex-col items-center gap-24'>
        <h2 className='absolute right-0 top-1/3 font-Amsterdam-four text-[140px] text-right text-brand-color'>
          Portfolio
        </h2>
        <ProjectCard />
        <ProjectCardRight />
        <ProjectCard />
      </div>
      <div className='inline-block mx-auto'>
        <Button caption='More projects' />
      </div>
    </section>
  );
}

export default Portfolio;
