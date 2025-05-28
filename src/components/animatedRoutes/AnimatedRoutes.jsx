{/*================== Essentials =======================*/}
import Home from '../../Pages/homePage/Home';
import Contact from '../../Pages/contactPage/Contact';
import Pricing from '../../Pages/pricingPage/Pricing';
import Services from '../../Pages/servicesPage/Services';
import Portfolio from '../../Pages/portfolioPage/Portfolio';
import Blog from '../../Pages/blogPage/Blog';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import QuotePage from '../quote/quoteForm';

{/*================== Development services =======================*/}
import WebDev from '../../Pages/Services/web_dev/WebDev';
import MobileApps from '../../Pages/Services/mobile_apps/MobileApps';
import ECommerce from '../../Pages/Services/e-commerce_solutions/ECommerce';
import ManagementSytems from '../../Pages/Services/management_systems/ManagementSytems';
import Wordpress from '../../Pages/Services/wordpress/Wordpress'
import SoftwareTesting from '../../Pages/Services/software_testing/SoftwareTesting'

{/*================== SEO services =======================*/}
import SEO from '../../Pages/Services/seo/SEO';
import WebMantanance from '../../Pages/Services/web_mantanace/WebMantanance'
import WebsiteSpeed from '../../Pages/Services/website_speed/WebsiteSpeed'

{/*================== Digital Marketing services =======================*/}
import SocialMediaMarketing from '../../Pages/Services/social_media_management/SocialMediaMarketing';
import GoogleAds from '../../Pages/Services/google_social_ads/GoogleAds';
import PPCManagement from '../../Pages/Services/PPCManagement/PPCManagement'
import EventMarketing from '../../Pages/Services/event_marketing/EventMarketing'
import MarketingConsultations from '../../Pages/Services/marketing_consultation/MarketingConsultations';
import GraphicDesign from '../../Pages/Services/graphic_design/GraphicDesign'

{/*================== IT services =======================*/}
import CloudServices from '../../Pages/Services/cloud_services/CloudServices'
import AIandML from '../../Pages/Services/AI&ML/AIandML'
import InternetOfThings from '../../Pages/Services/InternetOfThings/InternetOfThings'
import DataAnalysis from '../../Pages/Services/data_analysis_visualization/DataAnalysis'
import AgileProjects from '../../Pages/Services/agile_projects/AgileProjects'
import DevOps from '../../Pages/Services/DevOps/DevOps'
import NotFound from '../../Pages/404NotFound/404NotFound';

const AnimatedRoutes = () => {
    const location = useLocation();

  return (
  <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      {/*================== Essentials =======================*/} 
      <Route path='/' element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='quote' element={<QuotePage />} />

      {/*================== Development services =======================*/}
      <Route path='websitedevelopment' element={<WebDev />} />
      <Route path='mobileapps' element={<MobileApps />} />
      <Route path='ecommerce' element={<ECommerce />} />
      <Route path='managementsystems' element={<ManagementSytems />} />
      <Route path='wordpress' element={<Wordpress />} />
      <Route path='softwaretesting' element={<SoftwareTesting />} />

      {/*================== SEO services =======================*/}
      <Route path='seo' element={<SEO />} />
      <Route path='websitespeed' element={<WebsiteSpeed />} />
      <Route path='webmantanance' element={<WebMantanance />} />

      {/*================== Digital Marketing services =======================*/}
      <Route path='socialmediamarketing' element={<SocialMediaMarketing />} />
      <Route path='googleads' element={<GoogleAds />} />
      <Route path='ppcmanagements' element={<PPCManagement />} />
      <Route path='eventmarketing' element={<EventMarketing />} />
      <Route path='marketingconsultations' element={<MarketingConsultations />} />
      <Route path='graphicdesign' element={<GraphicDesign />} />

      {/*================== IT services =======================*/}
      <Route path='cloudservices' element={<CloudServices />} />
      <Route path='AIandML' element={<AIandML />} />
      <Route path='InternetOfThings' element={<InternetOfThings />} />
      <Route path='dataAnalysis' element={<DataAnalysis />} />
      <Route path='agileprojects' element={<AgileProjects />} />
      <Route path='devOps' element={<DevOps />} />

       {/* 404 Not Found Route */}
      <Route path='*' element={<NotFound />} />
    </Routes>
    </AnimatePresence> 
  )
}

export default AnimatedRoutes
