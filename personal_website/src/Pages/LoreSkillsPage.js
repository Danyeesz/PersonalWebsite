import { motion } from 'framer-motion';
import LoreSkillsCard from '../Components/LoreSkillsCard';



function LoreSkillsPage() {

    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1.5 }}>
            <LoreSkillsCard></LoreSkillsCard>
        </motion.div>

    )

}

export default LoreSkillsPage;