import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './custom-css/home.css';
import './custom-css/index-responsive.css';
import './custom-css/portfolio.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Pricing from './Pages/Pricing';
import SEO from './Pages/SEO';
// import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Navbar from './components/Navbar';
import Notification from "./components/Notification";
import ScrollToTop from "./components/ScrollToTop";
import Footer from './components/Footer';
import ECommerceDevelopment from './Pages/ECommerceDevelopment';
import GraphicDesign from './Pages/GraphicDesign'
import MobileApps from './Pages/MobileApps'
import SocialMediaMarketing from './Pages/SocialMediaMarketing'
import WebDevelopment from './Pages/WebDevelopment'
import WebsiteMaintenance from './Pages/WebsiteMaintenance'
import WordpressDevelopment from './Pages/WordpressDevelopment'
import WebsiteOptimization from './Pages/WebsiteOptmization'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='seo' element={<SEO />} />
        {/* <Route path='services' element={<Services />} /> */}
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='e-commerce-development' element={<ECommerceDevelopment />} />
        <Route path='website-development' element={<WebDevelopment />} />
        <Route path='graphic-design' element={<GraphicDesign />} />
        <Route path='mobile-apps' element={<MobileApps />} />
        <Route path='social-media-marketing' element={<SocialMediaMarketing />} />
        <Route path='website-maintenance' element={<WebsiteMaintenance />} />
        <Route path='website-optimization' element={<WebsiteOptimization />} />
        <Route path='wordpress-development' element={<WordpressDevelopment />} />
      </Routes>
      <Notification />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
