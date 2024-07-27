import Button from "../UI/Button";
import AboutImg from "../../assets/about-img.png";
import BackgroundText from "../UI/BackgroundText";
import BackgroundSquare from "../UI/BackgroundSquare";
import ArrowDown from "../../assets/arrow-down.svg";

function AboutPage() {
  return (
    <section className='flex gap-20 max-h-full p-[120px] relative overflow-hidden'>
      <div className='absolute top-[8%] left-0 w-[50%] h-[50%]'>
        <BackgroundSquare />
      </div>

      <div className='relative w-1/2 flex flex-col gap-9 text-left pl-24'>
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
        <img src={AboutImg} className='max-w-72 mx-auto' alt='My Photo' />
        <Button caption='Download CV' />
      </div>

      <div className='w-1/2'>
        <h2 className='h2-title'>About</h2>
        <BackgroundText text='about' top='-10%' left='62%' />
        <div className='flex gap-10 text-left'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tristique aliquet est, quis aliquam eros volutdf. Proin accumsan
            augue ac libero rhoncus, vel mattis dolor dictum.  rem ipsum dolor
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tristique aliquet est, quis aliquam eros volutdf. Proin accumsan
            augue ac libero rhoncus, vel mattis dolor dictum.  rem ipsum dolor
          </p>
          <p className='text-brand-color text-[110px]'>/</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
