import React, { useState } from 'react';
import './quote.css';
import Button from "../genericButton/genButton";
import GeometricShape from "../geometricShape/geometricShape";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="quote-page">
        <div className="quote-page-header">
            <h3>Get a Free Quote </h3>
            <h1>Request a Custom Quote<span>.</span></h1>
            <p>Looking for affordable digital solutions in Kenya? Binary Bros offers core services 
                including Custom Software Development, Search Engine Optimization (SEO), 
                Digital Marketing, Programming and Automation and more. 
                <span>Get custom quotations</span> for one-time or recurring projects—monthly, bi-monthly, 
                or annually. Request a quote now to elevate your online presence with our 
                expert team. <span>Fill out the form on this page</span> or contact us directly at 
                <span> info@binarybroske.com</span> or Call/WhatsApp us at <span>+254 791 880 412.</span></p>
        </div>



      <div className="quote-page-forms">

        <div className="contact-info-form-container">
        <div className="contact-info-form">
            <div className="contact-info-form-span">
                <h1>Contact Information</h1>
                <p>We will need your Name and Email Address but you wont get anything other than your reply.</p>
                <div className="bb-info">
                    <div className="bb-info-item">
                        <i className="fa fa-phone"></i>
                        <div className="bb-info-item-text">
                            <h3>+254 791 880 412</h3>
                            <h4>+254 724 124 872</h4>
                        </div>
                    </div>
                    <div className="bb-info-item">
                        <i className="fa fa-envelope"></i>
                        <div className="bb-info-item-text">
                            <h3>sales@binarybroske.com</h3>
                            <h4>sales@binarybroske.com</h4>
                        </div>
                    </div>
                    <div className="bb-info-item">
                        <i className="fas fa-location-arrow"></i>
                        <div className="bb-info-item-text">
                            <h3>Odyssey Plaza, South B</h3>
                            <h4>Mukoma Road, Nairobi</h4>
                        </div>
                    </div>
                </div>
                <div className="quote-socials">
                    <i className="fab fa-whatsapp"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                </div>
            </div>
            <div className="geometric_shape">
                <GeometricShape />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <div className="row-inputs">
                    <label>
                     First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jane" required />
                </label>
                <label>
                    Last Name(Optional):
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
                </label>
                    </div>

                <label>
                    Email/Company Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g janedoe@gmail.com" required />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g 0791880412" required />
                </label>
                <label>
                    Company (Optional):
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company/Brand or Business" />
                </label>
                </div>
                <Button text={"Next"} width={"200px"} showArrow={true}/>
            </form>
        </div>
    </div>
        <div className="request-detais-form-container">
        <div className="request-detais-form">
            <div className="request-detais-form-span">
            <h1>Request Details.</h1>
                <p>We will get back to you as soon as possibe to get started on your project.</p>
                <div className="bb-info">
                    <div className="bb-info-item">
                        <i className="fa fa-phone"></i>
                        <div className="bb-info-item-text">
                            <h3>+254 791 880 412</h3>
                            <h4>+254 724 124 872</h4>
                        </div>
                    </div>
                    <div className="bb-info-item">
                        <i className="fa fa-envelope"></i>
                        <div className="bb-info-item-text">
                            <h3>sales@binarybroske.com</h3>
                            <h4>sales@binarybroske.com</h4>
                        </div>
                    </div>
                    <div className="bb-info-item">
                        <i className="fas fa-location-arrow"></i>
                        <div className="bb-info-item-text">
                            <h3>Odyssey Plaza, South B</h3>
                            <h4>Mukoma Road, Nairobi</h4>
                        </div>
                    </div>
                </div>
                <div className="quote-socials">
                    <i className="fab fa-whatsapp"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                </div>
            </div>
            <div className="geometric_shape">
                <GeometricShape />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                <label>
            Service:
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select a service</option>
              <option value="webDevelopment">Web Development</option>
              <option value="seo">SEO</option>
              <option value="digitalMarketing">Digital Marketing</option>
              <option value="customSoftware">Custom Software Development</option>
              <option value="programmingAutomation">Programming and Automation</option>
            </select>
          </label>
          <label>
                    Project Subtype(Optional):
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Tell us about Any Specific Area of the selected service' required />
                </label>
          <label>
            Urgency:
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">How Urgent is this project (This will not affect response)</option>
              <option value="webDevelopment">Very Urgent</option>
              <option value="seo">Moderate</option>
              <option value="digitalMarketing">Not Very Urgent</option>
              <option value="digitalMarketing">Take your time</option>
            </select>
          </label>
          <label>
            Your Message:
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Tell us a bit more about your request or business needs, objectives and scope of work." required></textarea>
          </label>
                </div>
                <Button text={"Submit"} width={"200px"} showArrow={true}/>
            </form>
        </div>
    </div>
    
    <div className="quote-footer-description">
    <p>Thank you for your request! Once we receive your information, our team will review it and get back to you as soon as possible with a response. The submitted information will help us better understand your needs and tailor our assistance to align with your objectives.</p>
    </div>

      </div>

    </div>
  );
};

export default QuotePage;
