import { motion } from "framer-motion";
import WhyCards from "../../components/chooseUsCards/WhyCards";
import ContactForm from "../../components/mainContactForm/ContactForm";
import './Contact.css'
import QuotePage from "../../components/quote/quoteForm";

const Contact = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="quote-form-section" id="contact">
        <ContactForm />
      </section>

      <section className="Choose-Us-Cards">
        <WhyCards />
      </section>

      <section className="contact-form-section" id="quote">
        <QuotePage />
      </section>
    </motion.div>
  );
};

export default Contact;
