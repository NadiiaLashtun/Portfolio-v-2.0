import Button from "./Button";
import HorLine from "../../assets/hor-line.svg";

function TeamCard({ title, img, year, descr }) {
  return (
    <div className='flex flex-col'>
      <h3 className='mb-7 text-2xl font-medium'>{title}</h3>
      <img
        src={img}
        className='mb-6 max-w-[433px] max-h-[326px]'
        alt='Project image'
      />
      <div className='mb-5 mx-auto'>
        <Button caption={year} />
      </div>
      <img src={HorLine} className='mb-9' alt='Line' />
      <p>{descr}</p>
    </div>
  );
}

export default TeamCard;
