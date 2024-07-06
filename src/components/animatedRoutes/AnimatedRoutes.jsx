import Home from '../../Pages/homePage/Home';
import Contact from '../../Pages/contactPage/Contact';
import Pricing from '../../Pages/pricingPage/Pricing';
import SEO from '../../Pages/Services/seo/SEO';
import Services from '../../Pages/servicesPage/Services';
import Portfolio from '../../Pages/portfolioPage/Portfolio';
import Blog from '../../Pages/blogPage/Blog';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import WebDev from '../../Pages/Services/web_dev/WebDev';
import SocialMediaMarketing from '../../Pages/Services/social_media_management/SocialMediaMarketing';
import QuotePage from '../quote/quoteForm';
import MobileApps from '../../Pages/Services/mobile_apps/MobileApps';
import ECommerce from '../../Pages/Services/e-commerce_solutions/ECommerce';

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
      <Route path='mobileapps' element={<MobileApps />} />
      <Route path='ecommerce' element={<ECommerce />} />
    </Routes>
    </AnimatePresence> 
  )
}

export default AnimatedRoutes
