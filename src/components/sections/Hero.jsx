import Button from '../UI/buttons/Button';
import SocialList from '../UI/socialMedia/SocialList';
import BackgroundText from '../UI/BackgroundText';
import BackgroundSquare from '../UI/BackgroundSquare';
import Wrapper from '../Wrapper';
import HeroImg from '../../assets/hero-img.png';
import ArrowDown from '../../assets/arrow-down.svg';
import Header from './Header';

function HeroPage() {
  return (
    <>
      <section className='min-h-[calc(100vh-64px)] relative h-full px-6 py-8 sm:p-16 flex flex-col items-center gap-5 sm:flex-row sm:gap-3'>
        <BackgroundText
          text='web'
          left='30%'
          top='-10%'
        />
        <BackgroundText
          text='developer'
          left='-2%'
          bottom='12%'
        />
        <div className='w-full h-full md:w-2/3 flex flex-col justify-end gap-10 md:gap-20'>
          <h1 className='font-Montserrat-Alternates text-2xl md:text-3xl lg:text-4xl'>
            <span className='text-3xl md:text-4xl lg:text-5xl sm:pl-20 pr-4'>
              I’m
            </span>
            <span className='text-6xl md:text-7xl lg:text-8xl font-bold'>
              Nadiia <br />
              Lashtun <br />
            </span>

            <span className='text-brand-color drop-shadow-black font-semibold'>
              frontend developer
            </span>
            {/* <br />
            <span className='drop-shadow-black'>&</span>
            <br />
            <span className='text-xl md:text-1xl lg:text-3xl'>
              UX/UI designer
            </span> */}
          </h1>

          <div className='max-w-[90%] md:max-w-[75%] text-left pl-9 gap-4 border-l border-brand-color flex flex-col items-end'>
            <p>
              {/* I create modern, responsive, and user-friendly websites that bring
              ideas to life. <br />
              Let’s build something amazing together! */}
              From idea to interactive — I build experiences users love. Fast,
              modern, and made to impress. Your vision, my code. Let’s build
              something amazing together!
            </p>
            <a href='#contacts-page'>
              <Button
                className='drop-shadow-black'
                caption='Contact me'
              />
            </a>
          </div>
        </div>

        <div
          className='relative w-full md:w-1/3 border-black min-h-[24rem] sm:min-h-[38rem] self-end  
          before:absolute before:bottom-0 before:right-0 before:h-[1px] before:bg-black before:w-[calc(50%-theme(space.20))]
          after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:w-[calc(50%-theme(space.20))]
            "'
        >
          <div className='absolute bottom-0 right-0 w-[1px] h-1/4 bg-black'></div>
          <img
            src={HeroImg}
            className='absolute left-[16%] md:left-[5%] -bottom-16 max-h-[120%]  z-10'
            alt='Main Photo'
          />
          <img
            src={ArrowDown}
            className='absolute right-[-10px] bottom-[40%] h-1/2 '
            alt='Arrow'
          />
          {/* Square */}
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-12 w-full lg:w-[80%] xl:w-[45%] h-[98%] -z-20 lg:z-0 md:h-[94%]'>
            <BackgroundSquare />
          </div>
          <div>
            <div className='absolute left-1/2 -translate-x-1/2 -bottom-4 z-20'>
              <SocialList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
