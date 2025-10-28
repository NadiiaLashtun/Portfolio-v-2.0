import Button from '../buttons/Button';
import HorLine from '../../../assets/hor-line.svg';

function TeamCard({ title, img, descr, netlify, github }) {
  return (
    <div className='flex flex-col items-center max-w-[360px]'>
      <div className='relative w-full mb-6 pb-[72%] shadow-lg cursor-pointer overflow-hidden'>
        <a
          href={netlify}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={img}
            className='absolute top-0 left-0 w-full h-full transform duration-500 hover:scale-105 border border-text-color hover:brightness-110 shadow-lg'
            alt='Project image'
          />
        </a>
      </div>

      <div className='mb-5 mx-auto'>
        <a
          href={github}
          target='_blank'
          rel='noreferrer'
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
