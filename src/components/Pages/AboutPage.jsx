import Button from "../UI/Button";
import AboutImg from "../../assets/about-img.png";
import BackgroundText from "../UI/BackgroundText";
import BackgroundSquare from "../UI/BackgroundSquare";
import ArrowDown from "../../assets/arrow-down.svg";

function AboutPage() {
  return (
    <section
      className='flex flex-col-reverse md:flex-row gap-20 max-h-full p-[30px] sm:p-[60px] lg:p-[120px] relative'
      id='about-page'
    >
      <div className='absolute top-[75%] sm:top-[50%] md:top-[6%] left-0 w-full md:w-[50%] h-[25%] md:h-[50%]'>
        <BackgroundSquare />
      </div>

      <div className='relative w-full md:w-1/2 flex flex-col gap-9 text-left pl-12 md:pl-24 mx-auto'>
        <img
          src={ArrowDown}
          className='absolute h-2/3 left-[-2%] bottom-[40%] top-1/2 -translate-y-1/2'
          alt='Arrow'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tristique aliquet est, quis aliquam eros volutdf. Proin accumsan augue
          ac libero rhoncus, vel mattis dolor dictum.
        </p>

        <img src={AboutImg} className='max-w-72 ' alt='My Photo' />
        <Button caption='Download CV' />
      </div>

      <div className='w-full md:w-1/2'>
        <h2 className='h2-title'>About</h2>
        <BackgroundText text='about' top='-10%' left='55%' />
        <div className='flex gap-10 text-left'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tristique aliquet est, quis aliquam eros volutdf. Proin accumsan
            augue ac libero rhoncus, vel mattis dolor dictum. rem ipsum dolor
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tristique aliquet est, quis aliquam eros volutdf. Proin accumsan
            augue ac libero rhoncus, vel mattis dolor dictum. rem ipsum dolor
          </p>
          <p className='text-brand-color text-[110px]'>/</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
