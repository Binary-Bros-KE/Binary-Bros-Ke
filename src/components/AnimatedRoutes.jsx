import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Pricing from '../Pages/Pricing';
import SEO from '../Pages/Services/SEO';
import WebDev from '../Pages/Services/WebDev';
import DigitalMarketing from '../Pages/Services/DigitalMarketing';
import Services from '../Pages/Services';
import Portfolio from '../Pages/Portfolio';
import Blog from '../Pages/Blog';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

  return (
  <AnimatePresence> 
        <Routes location={location} key={location.pathname}> 
            <Route path='/' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='seo' element={<SEO />} />
            <Route path='WebDev' element={<WebDev />} />
            <Route path='DigitalMarketing' element={<DigitalMarketing />} />
            <Route path='services' element={<Services />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='blog' element={<Blog />} />
        </Routes>
    </AnimatePresence> 
  )
}

export default AnimatedRoutes
