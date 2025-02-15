import Button from "./Button";
import HorLine from "../../assets/hor-line.svg";

function TeamCard({ title, img, descr, netlify, github }) {
  return (
    <div className='flex flex-col items-center w-[90%] sm:w-1/3'>
      <div className='relative mb-6 max-w-[433px] max-h-[326px] border border-gray-800 shadow-lg cursor-pointer'>
        <a href={netlify} target='_blank'>
          <img
            src={img}
            className='w-full h-full object-cover transition-transform duration-700 transform hover:scale-125 hover:brightness-105'
            alt='Project image'
          />
        </a>
      </div>
      <div className='mb-5 mx-auto'>
        <a href={github} target='_blank'>
          <Button caption={title} />
        </a>
      </div>
      <img src={HorLine} className='mb-9' alt='Line' />
      <p>{descr}</p>
    </div>
  );
}

export default TeamCard;
