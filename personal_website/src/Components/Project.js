import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Project = (props) => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };
  
  const [closed, setClosed] = useState(false);
  const handleClose = () => {
    setClosed(true);
  };

  return (
    <motion.div className='lg:flex justify-center'>
      <motion.img
        className={`flex w-12/12 p-3 rounded-3xl cursor-pointer ${clicked ? 'hidden' : ''}` }
        src={props.image}
        onClick={() => clickHandler()}
      />
      <motion.div className={` ${clicked ? "" : "hidden"} m-2 flex`}>
        <motion.iframe
          className='rounded-2xl flex max-h-60 lg:max-h-full'
          width='950'
          height='500'
          src={props.link}
          title={props.title}
          
        ></motion.iframe>
      </motion.div>
      <div className='lg:text-left p-3 text-center'>
        <p className='text-2xl'>
          <b>{props.title}</b>
        </p>
        {props.description}
      </div>
    </motion.div>
  );
};

export default Project;
