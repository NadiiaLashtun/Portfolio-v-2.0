import Button from '../buttons/Button';

function ProjectCard({
  projectName,
  img,
  descr,
  netlify,
  github,
  flip = false,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 h-fit ${
        flip ? 'md:flex-row-reverse' : 'md:flex-row '
      }`}
    >
      {/* Card info */}
      <div
        className={`relative md:w-1/2 flex items-start 
          before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-px before:bg-black
          after:content-[''] after:absolute after:top-0 after:w-[7px] after:h-[7px] after:bg-black after:rounded-full
          ${
            flip
              ? 'pl-12 md:pl-0 before:left-0 md:before:-left-10 lg:before:-left-20 after:left-[-3px] md:after:-left-[43px] lg:after:-left-[83px] items-end min-h-[400px] '
              : 'pr-12 md:pr-0 before:right-0 md:before:-right-10 lg:before:-right-20 after:right-[-2.5px] md:after:-right-[43px] lg:after:-right-[83px] min-h-[260px] md:min-h-[340px]'
          }`}
      >
        <div
          className={`flex flex-col gap-5 ${
            flip ? ' items-start' : 'items-end'
          }`}
        >
          <a
            href={github}
            target='__blank'
            rel='noreferrer'
          >
            <Button
              caption='2025'
              flip={flip}
            />
          </a>
          <h4 className='mb-4 font-bold text-2xl text-brand-color'>
            {projectName}
          </h4>
          <p className='text-justify'>{descr}</p>{' '}
        </div>

        {/* Line */}
        {/* <img
          src={VertLine}
          alt=''
          className={`absolute top-0 bottom-0
          ${flip ? ' -right-1 md:-right-[87px]' : '-left-1 md:-left-[85px]'}`}
        /> */}
      </div>

      {/* Project image */}
      <a
        href={netlify}
        target='__blank'
        rel='noreferrer'
        className='w-full md:w-1/2'
      >
        <img
          src={img}
          alt='Project'
          className='w-full object-contain border border-text-color shadow-lg transform duration-500 hover:scale-105 hover:brightness-110'
        />
      </a>
    </div>
  );
}

export default ProjectCard;
