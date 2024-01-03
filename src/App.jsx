import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './custom-css/home.css';
import './custom-css/index-responsive.css';
import './custom-css/portfolio.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Pricing from './Pages/Pricing';
import SEO from './Pages/SEO';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Navbar from './components/Navbar';
import Notification from "./components/Notification";
import ScrollToTop from "./components/ScrollToTop";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='seo' element={<SEO />} />
        <Route path='services' element={<Services />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Routes>
      <Notification />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
