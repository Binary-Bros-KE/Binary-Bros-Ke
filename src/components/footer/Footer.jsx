import "./footer.css";
import logo from '../../../public/logo-black.png';
import blog from '../../../public/footer/blog.jpg';
import Button from "../genericButton/genButton";
import GeometricShape from "../geometricShape/geometricShape";

const Footer = () => {
  return (
<section className="footer" id="footer">
    <div className="footer__geometric__shape">
         <GeometricShape />
    </div>

    <div className="quick-info">

        <div className="logo-recap">
            <div className="logo">
                <img src={logo} alt="binary_bros_logo" />
            </div>
            <div className="footer-paragagraph">
                <p>  Rooted in a commitment to excellence and driven by results, Binary Bros stands as a pillar of technological advancement, ready to empower and elevate businesses in the ever-evolving digital landscape.</p>
            </div>
            <div className="footer-socials">
                Follow us on: <span>Facebook /</span><span>Twitter /</span><span>Instagram</span>
            </div>
        </div>

        <div className="quick-links">
                    <h1>Services</h1>
                    <ul>
                        <li><a href="/"><div className="service__icon"></div> Custom Sofware Development</a></li>
                        <li><a href="/services"><div className="service__icon"></div> Search Engine Optimization(SEO)</a></li>
                        <li><a href="/pricing"><div className="service__icon"></div> Digital Marketing</a></li>
                        <li><a href="/portfolio"><div className="service__icon"></div> Programming and Automation</a></li>
                    </ul>
        </div>

        <div className="footer-blog">
            <h1>Latest News</h1>
            <div className="footer-blog-element">
                <img src={blog} alt="blog-1" />
                <div className="footer-blog-date">
                    <h2>12th Dec 2023</h2>
                    <h3>Unlocking the Potential of AI in Business</h3>
                </div>
            </div>
            <div className="footer-blog-element">
                <img src={blog} alt="blog-2" />
                <div className="footer-blog-date">
                    <h2>12th Dec 2023</h2>
                    <h3>The Impact of Responsive Design on User Experience</h3>
                </div>
            </div>
            <div className="footer-blog-element">
                <img src={blog} alt="blog-3" />
                <div className="footer-blog-date">
                    <h2>12th Dec 2023</h2>
                    <h3>Exploring the Future of Web Development</h3>
                </div>
            </div>
        </div>

        <div className="newsletter">
            <h1>Newsletter</h1>
            <p>Stay updated with the latest trends, insights, and news in the digital world. Subscribe to our newsletter for valuable information delivered to your inbox.</p>
            <div className="footer-input">
               <input type="text" placeholder='Your Email Address'/>
               <Button text={"Subscribe"}/>
            </div>
        </div>
    </div>

    <div className="footer-tail">
        <div className="footer-tail-content">
            <div className="footer-tail-item">
            <div className="footer-tail-content-icon">
                <i className="fa fa-globe"></i>
            </div>
            <div className="footer-tail-content-text">
                <h3>Odyssey Plaza, Mukoma Road</h3>
                <h3>South B, Nairobi, Kenya</h3>
            </div>
            </div>
            
            <div className="footer-tail-item">
            <div className="footer-tail-content-icon">
                <i className="fa fa-phone"></i>
            </div>
            <div className="footer-tail-content-text">
                <h3>+254 791 880 412 | 0724124872</h3>
                <h3>Mon - Friday: 9.00am to 6.00pm</h3>
            </div>
            </div>
            <div className="footer-tail-item">
            <div className="footer-tail-content-icon">
                <i className="fas fa-envelope"></i>
            </div>
            <div className="footer-tail-content-text">
                <h3>info@binarybroske@gmail.com</h3>
                <h3>sales@binarybroske@gmai.com</h3>
            </div>
            </div>

        </div>
        <p>&copy; All Rights Reserved Binary Bros.</p>
    </div>
</section>

  )
}

export default Footer
