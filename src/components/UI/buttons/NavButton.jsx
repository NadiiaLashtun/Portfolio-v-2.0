import Arrow from '../../../assets/nav-arrow.svg?react';

function NavButton({ flip = false, className = '' }) {
  return (
    <button
      className={`${flip ? '-scale-x-100' : ''}  
                  ${className} 
                duration-500 hover:text-brand-color drop-shadow-black
                `}
      aria-label={
        className.slice(4) === 'prev'
          ? 'Slide to previous project'
          : 'Slide to next project'
      }
    >
      <Arrow className='hover:animate-bounce' />
    </button>
  );
}

export default NavButton;
