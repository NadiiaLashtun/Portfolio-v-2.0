import Button from "../UI/Button";
import NavMenu from "../UI/Menu/NavMenu";
import SocialList from "../UI/SocialMedia/SocialList";
import BackgroundText from "../UI/BackgroundText";
import BackgroundSquare from "../UI/BackgroundSquare";
import Wrapper from "../Wrapper";
import HeroImg from "../../assets/hero-img.png";
import Logo from "../../assets/logo.svg";
import ArrowDown from "../../assets/arrow-down.svg";

function HeroPage() {
  return (
    <>
      <header className='border-b border-black px-[60px]'>
        <nav className='flex justify-between items-center h-16'>
          <a href='/'>
            <img src={Logo} alt='Logo' />
          </a>
          <NavMenu />
        </nav>
      </header>
      <section className='relative flex max-h-full p-[60px] overflow-hidden '>
        <BackgroundText text='web' top='-10%' left='51%' />
        <BackgroundText text='developer' left='-2%' bottom='12%' />
        <div className='w-[60%] h-full flex flex-col justify-end gap-20'>
          <h1 className='font-Montserrat-Alternates text-4xl'>
            <span className='text-5xl pl-20 pr-4'>I’m</span>
            <span className='text-8xl font-bold'>
              Nadiia <br />
              Lashtun <br />
            </span>
            <span className='text-brand-color drop-shadow-black font-semibold'>
              frontend developer
            </span>
            <br />
            <span className='drop-shadow-black'>&</span>
            <br /> <span className='text-3xl'>UX/UI designer</span>
          </h1>

          <div className='max-w-[75%] text-left pl-9 border-l border-brand-color flex flex-col items-end'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tristique aliquet est, quis aliquam eros volutdf. Proin
              accumsan augue ac libero rhoncus, vel mattis dolor dictum. 
            </p>
            <Button className='drop-shadow-black' caption='Contact me' />
          </div>
        </div>
        <div className='relative w-[40%] border-b border-black'>
          <div className='absolute bottom-0 right-0 w-[1px] h-1/4 bg-black'></div>
          <img
            src={HeroImg}
            className='absolute left-[5%] -bottom-16 max-h-[120%] '
            alt='Main Photo'
          />
          <img
            src={ArrowDown}
            className='absolute right-[-10px] bottom-[40%] h-1/2 '
            alt='Arrow'
          />
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-12 w-[40%] h-[96%]'>
            <BackgroundSquare />
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-4'>
            <SocialList color='text-red-600' />
            <div className='absolute top-0 -z-10 left-1/2 -translate-x-1/2 -bottom-4 bg-secondary-color  w-full h-full'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
