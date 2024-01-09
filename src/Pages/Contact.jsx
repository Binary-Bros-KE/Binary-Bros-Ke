import { motion } from "framer-motion";
import QuoteForm from '../components/QuoteForm';
import ContactOne from '../components/ContactOne';
import WhyCards from "../components/WhyCards";

const Contact = () => {
  return (
    <motion.div
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >

      <section className="quote-form-section">
          <QuoteForm/>
      </section>

      <section className="counter-section">
        <div className="counter-header">
            <h3>What we do.!</h3>
            <h1>Why Work With Us</h1>
          </div>
            <WhyCards />
      </section>


      <section className="contact-form-section">
         <ContactOne />
      </section>

      
    </motion.div>
  )
}

export default Contact