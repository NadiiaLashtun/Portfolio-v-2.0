import SocialItem from "./SocialItem";
import LinkedIn from "/src/assets/linkedin.svg?react";
import GitHub from "/src/assets/github.svg?react";
import Telegram from "/src/assets/telegram.svg?react";
import Facebook from "/src/assets/facebook.svg?react";

const SocialMedia = [
  { name: "LinkedIn", icon: LinkedIn },
  { name: "GitHub", icon: GitHub },
  { name: "Telegram", icon: Telegram },
  { name: "Facebook", icon: Facebook },
];

function SocialList({ color, hoverColor }) {
  return (
    <div className='flex gap-4'>
      {SocialMedia.map((item, index) => {
        return (
          <SocialItem
            name={item.name}
            Icon={item.icon}
            key={index}
            color={color}
            hoverColor={hoverColor}
          />
        );
      })}
    </div>
  );
}

export default SocialList;
