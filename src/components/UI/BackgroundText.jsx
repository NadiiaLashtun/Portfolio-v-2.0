function BackgroundText({ text, left, right, top, bottom }) {
  return (
    <div
      style={{
        left: left !== 0 ? `${left}` : "auto",
        right: right !== 0 ? `${right}` : "auto",
        top: top !== 0 ? `${top}` : "auto",
        bottom: bottom !== 0 ? `${bottom}` : "auto",
      }}
      className='absolute tracking-wider -z-10 text-[220px] lg:text-[270px] opacity-30 select-none text-white uppercase font-bold w-full'
    >
      {/*top-12 right-[7%] */}
      {text}
    </div>
  );
}

export default BackgroundText;
