import ContactOne from '../components/ContactOne';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <ContactOne />
    </motion.div>
  )
}

export default Contact