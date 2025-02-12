function SocialItem({ name, Icon, color, hoverColor }) {
  return (
    <div className='w-7 h-7 group'>
      <Icon
        className={`w-full h-full text-${color} group-hover:text-${hoverColor} transition-colors duration-300`}
      />
    </div>
  );
}

export default SocialItem;
