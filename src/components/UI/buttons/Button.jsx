import Arrow from '../../../assets/arrow.svg';
function Button({ caption, flip = false, active = true }) {
  return (
    <button
      disabled={!active}
      className={`${flip ? '-scale-x-100' : ''}  ${
        active
          ? 'duration-500 hover:text-brand-color'
          : 'opacity-50 cursor-not-allowed'
      }
        group flex items-center gap-4 border-0 drop-shadow-black font-Amsterdam-four text-2xl sm:text-3xl`}
    >
      <div className={`${flip ? '-scale-x-100' : ''} text-nowrap`}>
        {caption}
      </div>
      <img
        className={`${
          active ? 'group-hover:animate-bounce' : ''
        } w-6 h-6 sm:w-8 sm:h-8`}
        src={Arrow}
        alt='Arrow button'
      />
    </button>
  );
}

export default Button;
