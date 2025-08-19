import Button from "./Button";
import VertLine from "../../assets/vert-line.svg";
import Img from "../../assets/img.png";

function ProjectCard({ projectName, flip = false }) {
  let flipCard = {
    position: "null",
    textSide: "null",
    textAlign: "right",
    button: false,
  };

  if (flip) {
    flipCard.position = "scaleX(-1)";
    flipCard.textSide = "end";
    flipCard.textAlign = "left";
    flipCard.button = true;
  }

  return (
    <div
      style={{
        transform: `${flipCard.position}`,
        alignItems: `${flipCard.textSide}`,
        textAlign: `${flipCard.textAlign}`,
      }}
      className='flex justify-center gap-10 lg:gap-20 max-w-[90%] flex-wrap '
    >
      <div
        style={{
          alignItems: `${flipCard.textSide}`,
        }}
        className='w-full md:w-1/2 flex gap-10 lg:gap-20 '
      >
        <div
          style={{
            transform: `${flipCard.position}`,
          }}
        >
          <div className='inline-block text-right mb-5'>
            <Button
              caption='2024'
              flip={flipCard.button}
            />
          </div>

          <h4 className='mb-9 font-bold text-2xl text-brand-color'>
            {projectName}
          </h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tristique aliquet est, quis aliquam eros volutdf. Proin accumsan
            augue ac libero rhoncus, vel mattis dolor dictum.
          </p>
        </div>
        <img
          src={VertLine}
          className='max-h-[500px] inline'
          alt='Line'
        />
      </div>

      <img
        src={Img}
        className='w-full md:w-[42%] min-w-[320px] max-h-[500px] object-contain align-middle'
        alt='Project 1'
      />
    </div>
  );
}

export default ProjectCard;
