function Skill({ name, percent }) {
  return (
    <div className='flex flex-col gap-2 w-80'>
      <div className='flex justify-between gap-5'>
        <span>{name}</span>
        <span>{percent}</span>
      </div>

      <div className='relative'>
        <div className=' z-0 border-t border-black border-4'></div>
        <div
          style={{ width: `${percent}` }}
          className='absolute z-10 inset-0 border-t border-brand-color border-4'
        ></div>
      </div>
    </div>
  );
}

export default Skill;
