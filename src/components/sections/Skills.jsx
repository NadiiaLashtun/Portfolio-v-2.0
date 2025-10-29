import Skill from '../UI/Skill';
import VSCode from '../../assets/vs-code.png';
import Figma from '../../assets/figma.png';
import PS from '../../assets/PS.png';
import PR from '../../assets/PR.png';
import BackgroundText from '../UI/BackgroundText';
import BackgroundSquare from '../UI/BackgroundSquare';

const skills1 = [
  { name: 'HTML+CSS', count: '90%' },
  { name: 'Flexbox', count: '80%' },
  { name: 'Bootstrap', count: '60%' },
  { name: 'Tailwind', count: '50%' },
];

const skills2 = [
  { name: 'JavaScript', count: '60%' },
  { name: 'React', count: '40%' },
  { name: 'Figma', count: '90%' },
  { name: 'Git', count: '80%' },
];

function SkillsPage() {
  return (
    <section
      className='relative px-6 py-8 sm:p-16 font-Montserrat-Alternates'
      id='skills-page'
    >
      <div className='w-1/3 h-[1px] absolute top-0 left-1/2 -translate-x-1/2 bg-black'></div>

      <div className='flex flex-wrap justify-center gap-5 md:gap-20 mb-14 pt-40 md:pt-0'>
        <div className='space-y-5'>
          {skills1.map((skill, index) => {
            return (
              <Skill
                name={skill.name}
                percent={skill.count}
                key={index}
              />
            );
          })}
        </div>
        <div className='space-y-5'>
          {skills2.map((skill, index) => {
            return (
              <Skill
                name={skill.name}
                percent={skill.count}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className='w-full flex justify-end'>
        <div className='max-w-56 grid grid-rows-2 grid-cols-2 gap-8 pr-[60px] border-r border-brand-color'>
          <img
            src={VSCode}
            alt='VS Code'
          />
          <img
            src={Figma}
            alt='Figma'
          />
          <img
            src={PS}
            alt='Photoshop'
          />
          <img
            src={PR}
            alt='Adobe Premier'
          />
        </div>
      </div>

      <h2 className='absolute left-0 top-[3%] md:top-[70%] bottom-[-12%] md:bottom-[-10%] text-[110px] md:text-[140px] text-left font-bold'>
        Skills
      </h2>
      <BackgroundText
        text='skills'
        bottom='-12%'
      />
      <div className='absolute -bottom-[16%] left-0 w-[20%] h-[20%] md:h-[40%]'>
        <BackgroundSquare />
      </div>
    </section>
  );
}

export default SkillsPage;
