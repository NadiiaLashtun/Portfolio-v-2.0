function SocialItem({ name, link, Icon, color = 'text-brand-color' }) {
  return (
    <div className='relative'>
      <div className='absolute inset-0 bg-text-white-color/80 rounded-full filter blur-sm'></div>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='w-7 h-7'
        title={name}
      >
        <Icon
          className={`${color} transition duration-500 drop-shadow-2xl hover:scale-110 hover:text-black`}
        />
      </a>
    </div>
  );
}

export default SocialItem;
