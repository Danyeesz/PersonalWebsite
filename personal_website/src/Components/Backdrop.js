import { motion } from 'framer-motion';

const Backdrop = ({children, onClick}) => {

return(
    <motion.div
        className='backdrop bg-black bg-opacity-75'
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        {children}
    </motion.div>

)


}

export default Backdrop;