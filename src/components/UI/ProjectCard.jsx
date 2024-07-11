import Button from "./Button";
import VertLine from "../../assets/vert-line.svg";
import Img from "../../assets/img.png";

function ProjectCard() {
  return (
    <div className='flex justify-center gap-20 max-w-[1055px] text-right'>
      <div>
        <div className='inline-block text-right mb-5'>
          <Button caption='2024' />
        </div>

        <h4 className='mb-9'>Web site 1</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tristique aliquet est, quis aliquam eros volutdf. Proin accumsan augue
          ac libero rhoncus, vel mattis dolor dictum. 
        </p>
      </div>
      <img src={VertLine} className='max-h-[340px]' alt='Line' />
      <img src={Img} className='max-w-[450px] max-h-[340px]' alt='Project 1' />
    </div>
  );
}

export default ProjectCard;
