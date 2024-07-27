/*import Telegram from "/src/assets/telegram.svg";*/

function SocialItem({ name, icon, color }) {
  /*console.log(name);
  console.log(icon);
  console.log(color);*/

  return (
    <div className='w-7 h-7'>
      <img src={icon} alt={name} />
      {/*<MyIcon style={{ fill: color, stroke: color }} /> style={{ fill: color, stroke: color }}*/}
    </div>
  );
}

export default SocialItem;
