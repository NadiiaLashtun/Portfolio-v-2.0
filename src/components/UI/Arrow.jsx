function Arrow({ position }) {
  return (
    <div className={`group  items-center h-full ${position}`}>
      <div className='relative w-5 h-full overflow-hidden inline-flex flex-col items-center'>
        <span className='absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-110%] w-[2px] h-full bg-arrow-gradient drop-shadow-white transition-all duration-1000 group-hover:translate-y-full z-50'></span>
        {/* <div className='w-5 h-5 bg-green-500 shadow-brand-color mx-auto'></div> */}

        <div className='w-[7px] h-[7px] bg-brand-color rounded-full mx-auto'></div>
        <div className='w-px h-[20%] bg-brand-color rounded-full -mt-1 mb-3'></div>
        <div className='relative  w-px h-[10%] bg-black rounded-full mb-3'></div>
        <div className='w-px h-[6%] bg-black rounded-full mb-2'></div>
        <div className='w-px h-[4%] bg-black rounded-full mb-1'></div>

        <div className='relative'>
          <div className='absolute top-0 left-[1px] md:left-[2px] w-[2px] h-[7px] md:h-[10px] bg-black rounded-full rotate-45'></div>

          <div className='absolute top-0 right-[1px] md:right-[2px] w-[2px] h-[7px] md:h-[10px] bg-black rounded-full -rotate-45'></div>
        </div>
        {/* Animation */}
      </div>
    </div>
  );
}

export default Arrow;

// function Arrow({ position }) {
//   return (
//     <div className={`inline-flex flex-col items-center h-full ${position}`}>
//       <div className='w-[7px] h-[7px] bg-brand-color rounded-full mx-auto'></div>
//       <div className='w-px h-[20%] bg-brand-color rounded-full -mt-1 mb-3'></div>
//       <div className='relative  w-px h-[10%] bg-black rounded-full mb-3'>
//         <span className='absolute top-0 -translate-y-full w-2 h-full background-[linear-gradient(90deg, tansparent, red)] transition-all duration-300 hover:translate-y-full'></span>
//       </div>
//       <div className='w-px h-[6%] bg-black rounded-full mb-2'></div>
//       <div className='w-px h-[4%] bg-black rounded-full mb-1'></div>
//       <div className='relative'>
//         <div className='absolute top-0 left-[1px] md:left-[2px] w-[2px] h-[7px] md:h-[10px] bg-black rounded-full rotate-45'></div>
//         <div className='absolute top-0 right-[1px] md:right-[2px] w-[2px] h-[7px] md:h-[10px] bg-black rounded-full -rotate-45'></div>
//       </div>
//     </div>
//   );
// }

// export default Arrow;
