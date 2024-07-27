import SocialItem from "./SocialItem";

const SocialMedia = [
  { name: "LinkedIn", icon: "src/assets/linkedin.svg" },
  { name: "GitHub", icon: "src/assets/github.svg" },
  { name: "Telegram", icon: "src/assets/telegram.svg" },
  { name: "Facebook", icon: "src/assets/facebook.svg" },
];

function SocialList({ color }) {
  return (
    <div className='flex gap-4 text-blue-500'>
      {SocialMedia.map((item, index) => {
        return (
          <SocialItem
            name={item.name}
            icon={item.icon}
            key={index}
            color={color}
          />
        );
      })}
    </div>
  );
}

export default SocialList;
