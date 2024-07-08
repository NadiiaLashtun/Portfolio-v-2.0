import Arrow from "../../assets/arrow.svg";
function Button({ caption }) {
  return (
    <button className='flex gap-4 border-0 drop-shadow-sm font-["Amsterdam-four"] text-2xl'>
      {caption}
      <img className='w-8 h-8 shadow-sm' src={Arrow} alt='Arrow button' />
    </button>
  );
}

export default Button;
