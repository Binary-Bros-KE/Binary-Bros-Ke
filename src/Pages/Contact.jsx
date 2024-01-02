import React from 'react'
import ContactOne from '../components/ContactOne';
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <ContactOne />

      <section className="footer" id="footer">
        <ScrollToTop />
        <Footer />
      </section>
    </div>
  )
}

export default Contact