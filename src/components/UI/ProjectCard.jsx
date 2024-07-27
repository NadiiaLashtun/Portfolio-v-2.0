import Button from "./Button";
import VertLine from "../../assets/vert-line.svg";
import Img from "../../assets/img.png";

function ProjectCard({ flip = false }) {
  let flipCard = {
    position: "null",
    textSide: "null",
    textAlign: "right",
    button: "false",
  };

  if (flip) {
    flipCard.position = "scaleX(-1)";
    flipCard.textSide = "end";
    flipCard.textAlign = "left";
    flipCard.button = "true";
  }

  console.log("card: " + flipCard.button);
  return (
    <div
      style={{
        transform: `${flipCard.position}`,
        alignItems: `${flipCard.textSide}`,
        textAlign: `${flipCard.textAlign}`,
      }}
      className='flex justify-center gap-20 max-w-[90%]'
    >
      <div
        style={{ transform: `${flipCard.position}` }}
        className='max-w-[450px]'
      >
        <div className='inline-block text-right mb-5'>
          <Button caption='2024' flip={flipCard.button} />
        </div>

        <h4 className='mb-9 font-bold text-2xl text-brand-color'>Web site 1</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tristique aliquet est, quis aliquam eros volutdf. Proin accumsan augue
          ac libero rhoncus, vel mattis dolor dictum. 
        </p>
      </div>
      <img src={VertLine} className='max-h-[500px]' alt='Line' />
      <img
        src={Img}
        className='max-w-[500px] max-h-[500px] object-contain align-middle'
        alt='Project 1'
      />
    </div>
  );
}

export default ProjectCard;
