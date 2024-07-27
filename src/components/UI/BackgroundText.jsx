function BackgroundText({ text, left, right, top, bottom }) {
  return (
    <div
      style={{
        left: left !== 0 ? `${left}` : "auto",
        right: right !== 0 ? `${right}` : "auto",
        top: top !== 0 ? `${top}` : "auto",
        bottom: bottom !== 0 ? `${bottom}` : "auto",
      }}
      className='absolute tracking-wider -z-10 text-[270px] opacity-30 text-white uppercase font-bold overflow-hidden'
    >
      {/*top-12 right-[7%] */}
      {text}
    </div>
  );
}

export default BackgroundText;
