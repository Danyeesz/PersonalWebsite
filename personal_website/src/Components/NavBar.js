import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

const NavBar = () => {
  const menuItems = ['About Me', 'Projects'];

  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <motion.nav className='lg:p-2 flex mb-2 justify-evenly items-center bg-gradient-to-b from-navbar to-lbrown'>
      <Link to='About%20Me'>
        <motion.span
          initial={{ y: '-100vh' }}
          animate={{ y: '0vh' }}
          transition={{ duration: 1 }}
          className='lg:flex rounded-xl text-5xl hidden font-bungee-shade text-dbrown'
        >
          Daniel Istvan
        </motion.span>
      </Link>
      <Link to='About%20Me'>
        <motion.span
          className='lg:hidden flex rounded-xl font-bungee-shade lg:text-3xl'
          initial={{ y: '-100vh' }}
          animate={{ y: '0vh' }}
          transition={{ duration: 1 }}
        >
          DI
        </motion.span>
      </Link>
      {menuItems.map((item) => (
        <Link to={item}>
          <motion.span
            initial={{ x: '100vw' }}
            animate={{ x: '0vw' }}
            transition={{ duration: 2.5 }}
            className='flex lg:text-3xl text-m font-bungee-inline rounded-2xl hover:underline text-dbrown  decoration-bggreen'
          >
            {item}
          </motion.span>
        </Link>
      ))}
      <motion.button
        initial={{ x: '100vw' }}
        animate={{ x: '0vw' }}
        transition={{ duration: 3 }}
        className='lg:text-3xl p-2 text-m font-bungee-inline text-dbrown rounded-2xl hover:underline decoration-bggreen'
        onClick={() => (modalOpen ? close() : open())}
      >
        Contact Me
      </motion.button>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </motion.nav>
  );
};

export default NavBar;
