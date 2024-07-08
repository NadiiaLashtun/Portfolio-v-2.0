import SocialItem from "./SocialItem";
import Linkedin from "../../../assets/linkedin.svg";
import Github from "../../../assets/github.svg";
import Telegram from "../../../assets/telegram.svg";
import Facebook from "../../../assets/facebook.svg";

function SocialList() {
  return (
    <div className='flex gap-4'>
      <img src={Linkedin} alt='LinkedIn' className='w-7 h-7 text-brand-color' />
      <img src={Github} alt='GitHub' className='w-7 h-7 text-brand-color' />
      <img src={Telegram} alt='Telegram' className='w-7 h-7 text-brand-color' />
      <img src={Facebook} alt='Facebook' className='w-7 h-7 text-brand-color' />
    </div>
  );
}

export default SocialList;
