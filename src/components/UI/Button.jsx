import Arrow from "../../assets/arrow.svg";
function Button({ caption, flip = false, active = true }) {
  return (
    <button
      disabled={!active}
      className={`${flip ? "-scale-x-100" : ""}  ${
        active
          ? "duration-500 hover:text-brand-color"
          : "opacity-50 cursor-not-allowed"
      }
        group flex gap-4 border-0 drop-shadow-black font-Amsterdam-four text-3xl  `}
    >
      <div className={`${flip ? "-scale-x-100" : ""}`}>{caption}</div>
      <img
        className={`${active ? "group-hover:animate-bounce" : ""} w-8 h-8`}
        src={Arrow}
        alt='Arrow button'
      />
    </button>
  );
}

export default Button;
