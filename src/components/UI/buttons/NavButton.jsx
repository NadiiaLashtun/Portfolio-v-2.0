import Arrow from '../../../assets/nav-arrow.svg?react';

function NavButton({ flip = false, className = '' }) {
  return (
    <button
      className={`${flip ? '-scale-x-100' : ''}  
                  ${className} 
                duration-500 hover:text-brand-color drop-shadow-black
                `}
    >
      <Arrow className='hover:animate-bounce' />
    </button>
  );
}

export default NavButton;
