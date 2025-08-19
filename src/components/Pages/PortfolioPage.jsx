import ProjectCard from "../UI/ProjectCard";
import Img from "../../assets/img.png";
import Button from "../UI/Button";
import BackgroundText from "../UI/BackgroundText";
import BackgroundSquare from "../UI/BackgroundSquare";

function Portfolio() {
  return (
    <section
      className='relative pt-[120px] pb-[60px] px-[40px]'
      id='portfolio-page'
    >
      <h3 className='h3-title'>Portfolio</h3>

      <div className='relative flex flex-col items-center gap-32'>
        <h2 className='h2-title absolute right-[1%] top-[29%] text-right'>
          Portfolio <br /> <span className='font-Montserrat'>/</span>
        </h2>
        <BackgroundText
          text='portfolio'
          left='55%'
          top='22%'
        />
        <ProjectCard projectName={"Trevland"} />
        <ProjectCard flip={true} />
        <ProjectCard />
      </div>
      <div className='inline-block mx-auto pt-20'>
        <Button
          caption='More projects'
          active={false}
        />
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
