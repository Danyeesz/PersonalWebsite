import Backdrop from './Backdrop';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};

const Modal = ({ handleClose }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal bg-gradient-to-t from-bggreen to-navbar"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p className="font-bungee-inline m-2 text-3xl">Contact Me:</p>
                <p className="text-lg"><b>E-mail:</b> daniel12094@gmail.com</p>
                <p className="text-lg"><b>Phone:</b> +36 30 535 8964</p>
                <div className="flex justify-evenly">
                <SocialIcon bgColor="#A18276" className="m-1 " url="https://www.linkedin.com/in/daniel-istvan12"/>
                <SocialIcon bgColor="#A18276" className="m-1" url="https://www.facebook.com/profile.php?id=100007276546742"/>
                </div>
                <button className="text-2xl m-2 border-2 rounded-lg p-2" onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    )

}

export default Modal; 