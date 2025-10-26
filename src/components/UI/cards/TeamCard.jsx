import Button from '../buttons/Button';
import HorLine from '../../../assets/hor-line.svg';

function TeamCard({ title, img, descr, netlify, github }) {
  return (
    <div className='flex flex-col items-center max-w-[400px]'>
      <div className='relative mb-6 max-h-[280px] shadow-lg cursor-pointer'>
        <a
          href={netlify}
          target='_blank'
        >
          <img
            src={img}
            className='w-full h-full object-cover transform duration-500 hover:scale-105 border border-text-color hover:brightness-110 shadow-lg'
            alt='Project image'
          />
        </a>
      </div>
      <div className='mb-5 mx-auto'>
        <a
          href={github}
          target='_blank'
        >
          <Button caption={title} />
        </a>
      </div>
      <img
        src={HorLine}
        className='mb-9'
        alt='Line'
      />
      <p className='break-words w-full'>{descr}</p>
    </div>
  );
}

export default TeamCard;
