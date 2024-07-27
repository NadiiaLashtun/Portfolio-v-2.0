import Button from "./Button";
import VertLine from "../../assets/vert-line.svg";
import Img from "../../assets/img.png";

function ProjectCardRight() {
  return (
    <div className='flex justify-center items-end gap-20 max-w-[90%] text-left -scale-x-100'>
      <img src={Img} className='max-w-[450px] max-h-[340px]' alt='Project 1' />
      <img src={VertLine} className='h-[400px]' alt='Line' />
      <div className='max-w-[450px] -scale-x-100'>
        <div className='inline-block text-right mb-5'>
          <Button caption='2024' />
        </div>

        <h4 className='mb-9  font-bold text-2xl text-brand-color'>
          Web site 1
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tristique aliquet est, quis aliquam eros volutdf. Proin accumsan augue
          ac libero rhoncus, vel mattis dolor dictum. 
        </p>
      </div>
    </div>
  );
}

export default ProjectCardRight;
