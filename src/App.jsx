import './index.css';
import './custom-css/home.css';
import './custom-css/index-responsive.css';
import './custom-css/portfolio.css';
import './custom-css/services.css'
import Navbar from './components/Navbar';
import Notification from "./components/Notification";
import ScrollToTop from "./components/ScrollToTop";
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
        <AnimatedRoutes />
      <Notification />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
