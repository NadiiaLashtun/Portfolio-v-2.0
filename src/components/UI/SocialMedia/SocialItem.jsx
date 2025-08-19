function SocialItem({ name, link, Icon, color, hoverColor }) {
  console.log("color = " + color + " hoverColor = " + hoverColor);
  hoverColor = "red";
  return (
    <a
      href={link}
      className='w-7 h-7 group'
      target='_blank'
    >
      <Icon
        className={
          console.log(
            `w-full h-full text-${color} group-hover:text-${hoverColor} transition-colors duration-300`
          ) +
          ` w-full h-full text-${color} hover:text-${hoverColor} transition-colors duration-300`
        }
      />
    </a>
  );
}

export default SocialItem;
