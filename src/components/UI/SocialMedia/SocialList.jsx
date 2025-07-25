import SocialItem from "./SocialItem";
import LinkedIn from "/src/assets/linkedin.svg?react";
import GitHub from "/src/assets/github.svg?react";
import Telegram from "/src/assets/telegram.svg?react";
import Facebook from "/src/assets/facebook.svg?react";

const SocialMedia = [
  {
    name: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/lashtun/",
  },
  {
    name: "GitHub",
    icon: GitHub,
    link: "https://github.com/NadiiaLashtun",
  },
  {
    name: "Telegram",
    icon: Telegram,
    link: "https://t.me/nilashtun",
  },
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/nadezhda.lashtun",
  },
];

function SocialList({ color, hoverColor }) {
  return (
    <div className='flex gap-4'>
      {SocialMedia.map((item, index) => {
        return (
          <SocialItem
            name={item.name}
            link={item.link}
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
