import './index.css';
import Navbar from './components/navbar/Navbar';
import Notification from "./components/sideNotification/Notification";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Footer from './components/footer/Footer';
import AnimatedRoutes from './components/animatedRoutes/AnimatedRoutes';
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
