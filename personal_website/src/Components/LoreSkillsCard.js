import { motion } from 'framer-motion';
import LoreImage from '../Images/ProfilePic.jpg';
import { LoreText } from '../Data/LoreSkillsData';
import SkillCard from './SkillCard';

function LoreSkillsCard() {
  return (
    <motion.div className='flex-col'>
      <div className='lg:flex'>
        <img src={LoreImage} className='lg:w-3/12 rounded-3xl p-2 m-auto'></img>
        <div className='lg:text-2xl lg:bg-transparent m-2 p-2 text-sm whitespace-pre-wrap font-medium'>
          <p className='text-dbrown bg-lbrown rounded-xl p-2 lg:p-0'>
            <b>Hello and Welcome to my Portfolio Page!</b>
          </p>
          {LoreText}
          <a
            className='underline decoration-navbar'
            href='https://drive.google.com/file/d/1qbRM_WKG07x1hkXT16tk_uUOAO1soVI_/view?usp=sharing'
            target='_blank'
          >
            <b>click here</b>
          </a>
          !
        </div>
      </div>
      <div className="">
        <SkillCard />
      </div>
    </motion.div>
  );
}

export default LoreSkillsCard;
