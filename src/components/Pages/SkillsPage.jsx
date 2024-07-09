import Skill from "../UI/Skill";
import VSCode from "../../assets/vs-code.png";
import Figma from "../../assets/figma.png";
import PS from "../../assets/PS.png";
import PR from "../../assets/PR.png";

const skills1 = [
  { name: "HTML+CSS", count: "90%" },
  { name: "Flexbox", count: "80%" },
  { name: "Bootstrap", count: "60%" },
  { name: "Tailwind", count: "50%" },
];

const skills2 = [
  { name: "JavaScript", count: "60%" },
  { name: "React", count: "40%" },
  { name: "Figma", count: "90%" },
  { name: "Git", count: "80%" },
];

function SkillsPage() {
  return (
    <section className='p-[60px] border-t border-black font-Montserrat-Alternates   '>
      <div className='flex justify-center gap-20 mb-14'>
        <div className='space-y-5'>
          {skills1.map((skill) => {
            return <Skill name={skill.name} percent={skill.count} />;
          })}
        </div>
        <div className='space-y-5'>
          {skills2.map((skill) => {
            return <Skill name={skill.name} percent={skill.count} />;
          })}
        </div>
      </div>

      <div className='w-full flex justify-end'>
        <div className='max-w-56 grid grid-rows-2 grid-cols-2 gap-8 pr-[60px] border-r border-brand-color'>
          <img src={VSCode} alt='VS Code' />
          <img src={Figma} alt='Figma' />
          <img src={PS} alt='Photoshop' />
          <img src={PR} alt='Adobe Premier' />
        </div>
      </div>

      <h2 className='text-[140px] text-left font-bold'>Skills</h2>
    </section>
  );
}

export default SkillsPage;
