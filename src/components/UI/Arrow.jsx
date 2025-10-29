function Arrow({ position }) {
  return (
    <div className={`inline-flex flex-col items-center h-full ${position}`}>
      <div className='w-[5px] h-[5px] md:w-[7px] md:h-[7px] bg-brand-color rounded-full mx-auto'></div>
      <div className='w-px h-[20%] bg-brand-color rounded-full -mt-1 mb-3'></div>
      <div className='w-px h-[10%] bg-black rounded-full mb-3'></div>
      <div className='w-px h-[6%] bg-black rounded-full mb-2'></div>
      <div className='w-px h-[4%] bg-black rounded-full mb-1'></div>
      <div className='relative'>
        <div className='absolute top-0 left-[1px] md:left-[2px] w-[2px] h-[7px] md:h-[10px] bg-black rounded-full rotate-45'></div>
        <div className='absolute top-0 right-[1px] md:right-[2px] w-[2px] h-[7px] md:h-[10px] bg-black rounded-full -rotate-45'></div>
      </div>
    </div>
  );
}

export default Arrow;
