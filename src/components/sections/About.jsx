import Button from '../UI/buttons/Button';
import AboutImg from '../../assets/about-img.png';
import BackgroundText from '../UI/BackgroundText';
import BackgroundSquare from '../UI/BackgroundSquare';
import ArrowDown from '../../assets/arrow-down.svg';

function AboutPage() {
  return (
    <section
      className='flex flex-col-reverse md:flex-row gap-14 lg:gap-20 max-h-full p-[30px] sm:p-[60px] lg:py-[120px] relative'
      id='about-page'
    >
      <div className='absolute top-[54%] sm:top-[50%] md:top-[4%] left-0 w-full md:w-[50%] h-[25%] md:h-[50%]'>
        <BackgroundSquare />
      </div>

      <div className='relative w-full md:w-1/2 flex flex-col gap-9 text-left pl-12 lg:pl-24 p-8 mx-auto'>
        <img
          src={ArrowDown}
          className='absolute h-1/2 left-[-2%] bottom-[40%] top-1/2 -translate-y-1/2'
          alt='Arrow'
        />
        <p>
          I am a Frontend Developer with a strong IT background, experienced in
          creating clean, maintainable, and high-performing web applications. My
          goal is to deliver scalable and impactful solutions that combine clean
          design with high functionality.
        </p>

        <img
          src={AboutImg}
          className='max-w-72 '
          alt='My Photo'
        />
        <a
          href='/files/Lashtun_Nadezhda_Frontend_Developer_eng_CV.pdf'
          download='Lashtun_Nadezhda_Frontend_Developer_CV.pdf'
        >
          <Button caption='Download CV' />
        </a>
      </div>

      <div className='w-full md:w-1/2'>
        <h2 className='h2-title'>About</h2>
        <BackgroundText
          text='about'
          top='-10%'
          left='55%'
        />
        <div className='flex gap-4 lg:gap-8 text-left'>
          <div className='flex gap-6 lg:gap-8 flex-wrap'>
            <div className='flex-1 min-w-44'>
              <h3 className='bg-text-white-color text-brand-color my-4'>
                What I do:
              </h3>
              <ul className='space-y-5 lg:space-y-5 list-disc list-outside border-l-[1px] marker:text-brand-color border-brand-color pl-[14px]'>
                <li className=''>
                  Build responsive and user-friendly interfaces
                </li>
                <li>Work with UI/UX tools (Figma, Canva) </li>
                <li>Collaborate in teams with Jira</li>
                <li>Use version control (Git)</li>
              </ul>
            </div>
            <div className='flex-1 min-w-44'>
              <h3 className='bg-text-white-color text-brand-color my-4'>
                I’ve completed:
              </h3>
              <ul className='space-y-5 lg:space-y-5 list-disc list-outside border-l-[1px] marker:text-brand-color border-brand-color pl-[14px]'>
                <li>Several international team projects at Chingu</li>
                <li>Specialized courses (SheCodes, Genius)</li>
                <li>I speak English (B1), Czech (A2)</li>
                <li>Open to remote opportunities</li>
              </ul>
            </div>
          </div>
          <p className='text-brand-color text-[110px] flex-grow-0'>/</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
