import ProjectCard from "../UI/ProjectCard";
import ProjectCardRight from "../UI/ProjectCardRight";
import Img from "../../assets/img.png";
import Button from "../UI/Button";
import BackgroundText from "../UI/BackgroundText";
import BackgroundSquare from "../UI/BackgroundSquare";

function Portfolio() {
  return (
    <section className='relative pt-[120px] pb-[60px] px-[40px] overflow-x-hidden'>
      <h3 className=' mb-20 font-Montserrat-Alternates font-bold text-4xl'>
        Portfolio
      </h3>

      <div className='relative flex flex-col items-center gap-32'>
        <h2 className='absolute right-[1%] top-[32%] font-Amsterdam-four text-[140px] text-right text-brand-color'>
          Portfolio <br /> <span className='font-Montserrat'>/</span>
        </h2>
        <BackgroundText text='portfolio' left='57%' top='22%' />
        <ProjectCard />
        <ProjectCard flip={true} />
        <ProjectCard />
      </div>
      <div className='inline-block mx-auto pt-20'>
        <Button caption='More projects' />
      </div>
      <div className=' absolute bottom-[10%] left-[2%] w-[20%] h-[35%]'>
        <BackgroundSquare width='100%' height='100%' />
      </div>
    </section>
  );
}

export default Portfolio;
