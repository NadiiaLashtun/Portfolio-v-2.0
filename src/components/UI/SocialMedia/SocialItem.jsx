function SocialItem({ name, link, Icon, color, hoverColor }) {
  return (
    <a href={link} className='w-7 h-7 group' target='_blank'>
      <Icon
        className={`w-full h-full text-${color} group-hover:text-${hoverColor} transition-colors duration-300`}
      />
    </a>
  );
}

export default SocialItem;
