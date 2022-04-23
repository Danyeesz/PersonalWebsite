import Project from '../Components/Project';
import { motion } from 'framer-motion';
import ProjectsData from '../Data/ProjectsData';

function ProjectsPage() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className='flex-col'
    >
      <div className='flex justify-center font-bold text-dbrown text-center'>
        Click on any of the pictures below to watch a short video of the certain
        project
      </div>
      {ProjectsData.map((item) => (
        <div className='font-medium whitespace-pre-wrap text-justify text-xl'>
          <Project
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        </div>
      ))}
    </motion.div>
  );
}

export default ProjectsPage;
