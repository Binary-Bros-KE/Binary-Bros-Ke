import logo from '../Assets/logo-black.png';
import blog from '../Assets/footer/blog.jpg';

const Footer = () => {
  return (
<section className="footer" id="footer">
    <div className="quick-info">

        <div className="logo-recap">
            <div className="logo">
                <img src={logo} alt="binary_bros_logo" />
            </div>
            <div className="footer-paragagraph">
                <p>  Rooted in a commitment to excellence and driven by results, Binary Bros stands as a pillar of technological advancement, ready to empower and elevate businesses in the ever-evolving digital landscape.</p>
            </div>
            <div className="footer-socials">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>

        <div className="quick-links">
            <div className="Useful-links">
                    <h1>Useful Links</h1>
                    <ul>
                        <li><a href="/"><i className="fas fa-chevron-right"></i>Home</a></li>
                        <li><a href="/services"><i className="fas fa-chevron-right"></i>Services</a></li>
                        <li><a href="/pricing"><i className="fas fa-chevron-right"></i>Pricing</a></li>
                        <li><a href="/portfolio"><i className="fas fa-chevron-right"></i>Portfolio</a></li>
                        <li><a href="/blog"><i className="fas fa-chevron-right"></i>Blog</a></li>
                        <li><a href="/contact"><i className="fas fa-chevron-right"></i>Contact</a></li>
                    </ul>
            </div>
             <div className="footer-services">
                    <h1>Useful Links</h1>
                    <ul>
                        <li><a href="/"><i className="fas fa-chevron-right"></i>SEO</a></li>
                        <li><a href="/services"><i className="fas fa-chevron-right"></i>Web Development</a></li>
                        <li><a href="/pricing"><i className="fas fa-chevron-right"></i>Digital Marketing</a></li>
                        <li><a href="/portfolio"><i className="fas fa-chevron-right"></i>Mobile Apps</a></li>
                        <li><a href="/blog"><i className="fas fa-chevron-right"></i>Wordpress</a></li>
                        <li><a href="/SEO"><i className="fas fa-chevron-right"></i>Graphic Design</a></li>
                    </ul>
             </div>
        </div>

        <div className="blog">
            <h1>Latest News</h1>
            <div className="blog-element">
                <img src={blog} alt="blog-1" />
                <h3>Unlocking the Potential of AI in Business</h3>
            </div>
            <div className="blog-element">
                <img src={blog} alt="blog-2" />
                <h3>The Impact of Responsive Design on User Experience</h3>
            </div>
            <div className="blog-element">
                <img src={blog} alt="blog-3" />
                <h3>Exploring the Future of Web Development</h3>
            </div>
        </div>

        <div className="newsletter">
            <h1>Subscribe to Our Newsletter</h1>
            <p>Stay updated with the latest trends, insights, and news in the digital world. Subscribe to our newsletter for valuable information delivered to your inbox.</p>
            <div className="footer-input">
               <input type="text" placeholder='Your Email Address'/>
               <a href="#">Subscribe</a>
            </div>
        </div>
    </div>
    <div className="rights">
        <p>&copy; All Rights Reserved Binary Bros.</p>
    </div>
</section>

  )
}

export default Footer
