import Button from "../UI/Button";
import AboutImg from "../../assets/about-img.png";

function AboutPage() {
  return (
    <section className='flex gap-20 max-h-full p-[60px]'>
      <div className='w-1/2 flex flex-col gap-9 text-left pl-24'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tristique aliquet est, quis aliquam eros volutdf. Proin accumsan augue
          ac libero rhoncus, vel mattis dolor dictum. 
        </p>
        <img src={AboutImg} className='max-w-72 mx-auto' alt='My Photo' />
        <Button caption='Download CV' />
      </div>
      <div className='w-1/2'>
        <h2 className='font-Amsterdam-four text-[140px] leading-[2.5] text-brand-color '>
          About
        </h2>
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
          <p className='text-brand-color text-[140px]'>/</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
