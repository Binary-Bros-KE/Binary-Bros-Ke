import Home from '../../Pages/homePage/Home';
import Contact from '../../Pages/contactPage/Contact';
import Pricing from '../../Pages/pricingPage/Pricing';
import SEO from '../../Pages/Services/SEO';
import Services from '../../Pages/servicesPage/Services';
import Portfolio from '../../Pages/portfolioPage/Portfolio';
import Blog from '../../Pages/blogPage/Blog';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import WebDev from '../../Pages/Services/WebDev';
import SocialMediaMarketing from '../../Pages/Services/SocialMediaMarketing';
import QuotePage from '../quote/quoteForm';

const AnimatedRoutes = () => {
    const location = useLocation();

  return (
  <AnimatePresence> 
    <Routes location={location} key={location.pathname}> 
      <Route path='/' element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='quote' element={<QuotePage />} />

      {/*================== services =======================*/}
      <Route path='seo' element={<SEO />} />
      <Route path='websitedevelopment' element={<WebDev />} />
      <Route path='socialmediamarketing' element={<SocialMediaMarketing />} />
    </Routes>
    </AnimatePresence> 
  )
}

export default AnimatedRoutes
