import './index.css';
import './custom-css/home.css'
import './custom-css/index-responsive.css'
import Home from './Pages/Home';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="home-container">
      <div className="navbar">
          <Navbar />
      </div>
      <div className="home-container">
          <Home />
      </div>
    </div>
  )
}

export default App