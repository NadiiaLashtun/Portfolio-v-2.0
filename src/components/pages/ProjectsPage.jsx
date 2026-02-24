import OwnProjects from '../sections/OwnProjects';
import TeamProjects from '../sections/TeamProjects';
import { useEffect } from 'react';

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <OwnProjects />
      <TeamProjects />
    </section>
  );
}

export default ProjectsPage;
