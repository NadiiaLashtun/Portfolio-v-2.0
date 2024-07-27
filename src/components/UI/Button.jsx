import Arrow from "../../assets/arrow.svg";
function Button({ caption, flip = false }) {
  console.log("button: " + flip);
  return (
    <button
      className={`${flip ? "-scale-x-100" : ""}
        group flex gap-4 border-0 drop-shadow-sm font-Amsterdam-four text-3xl duration-500 hover:text-brand-color`}
    >
      <div className={`${flip ? "-scale-x-100" : ""}`}>{caption}</div>
      <img
        className='w-8 h-8 shadow-sm group-hover:animate-bounce'
        src={Arrow}
        alt='Arrow button'
      />
    </button>
  );
}

export default Button;
