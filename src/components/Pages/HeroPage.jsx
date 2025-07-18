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
      <header className='border-b border-black px-[30px] sm:px-[60px]'>
        <nav className='flex justify-between items-center h-16'>
          <a href='/'>
            <img src={Logo} alt='Logo' />
          </a>
          <NavMenu />
        </nav>
      </header>
      <section className='relative max-h-full p-[30px] sm:p-[60px] flex flex-col gap-5 sm:flex-row sm:gap-0'>
        <BackgroundText text='web' left='30%' top='-10%' />
        <BackgroundText text='developer' left='-2%' bottom='12%' />
        <div className='w-full md:w-2/3 h-full flex flex-col justify-end gap-10 md:gap-20'>
          <h1 className='font-Montserrat-Alternates text-2xl md:text-3xl lg:text-4xl'>
            <div>
              <span className='text-3xl md:text-4xl lg:text-5xl sm:pl-20 pr-4'>
                I’m
              </span>
              <span className='text-6xl md:text-7xl lg:text-8xl font-bold'>
                Nadiia <br />
                Lashtun <br />
              </span>
            </div>
            <span className='text-brand-color drop-shadow-black font-semibold'>
              frontend developer
            </span>
            <br />
            <span className='drop-shadow-black'>&</span>
            <br />
            <span className='text-xl md:text-1xl lg:text-3xl'>
              UX/UI designer
            </span>
          </h1>

          <div className='max-w-[90%] md:max-w-[75%] text-left pl-9 border-l border-brand-color flex flex-col items-end'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tristique aliquet est, quis aliquam eros volutdf. Proin
              accumsan augue ac libero rhoncus, vel mattis dolor dictum. 
            </p>
            <Button className='drop-shadow-black' caption='Contact me' />
          </div>
        </div>

        <div className='relative w-full md:w-1/3 border-b border-black min-h-96'>
          <div className='absolute bottom-0 right-0 w-[1px] h-1/4 bg-black'></div>
          <img
            src={HeroImg}
            className='absolute left-[16%] md:left-[5%] -bottom-16 max-h-[120%] '
            alt='Main Photo'
          />
          <img
            src={ArrowDown}
            className='absolute right-[-10px] bottom-[40%] h-1/2 '
            alt='Arrow'
          />
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-12 w-full sm:w-[80%] md:w-[45%] h-[98%] -z-20 md:z-0 md:h-[94%]'>
            <BackgroundSquare />
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-4'>
            <SocialList color='brand-color' hoverColor='brand-dark-color' />
            <div className='absolute top-0 -z-10 left-1/2 -translate-x-1/2 -bottom-4 bg-secondary-color  w-full h-full'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
