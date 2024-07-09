import React, { useState, useEffect } from 'react';
import './quote.css';
import Button from "../genericButton/genButton";
import GeometricShape from "../geometricShape/geometricShape";
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

const QuotePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: queryParams.get('service') || '',
    package: queryParams.get('package') || '',
    description: '',
    budget: '',
  });

  const [messageSent, setMessageSent] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [displayError, setDisplayError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (isFinalStep = false) => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (isFinalStep && !formData.service) errors.service = "Service is required.";
    if (isFinalStep && !formData.description) errors.description = "Description is required.";
    if (isFinalStep && formData.package === '') {
      errors.package = "Please select a valid package.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextClick = (e) => {
    if (!validateForm()) {
      e.preventDefault();
    } else {
      document.getElementById('request-details').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm(true)) {
      console.log("Form validation failed:", formErrors);
      setDisplayError('Please correct the errors in the form before submitting.');
      return;
    }

    // EmailJS parameters
    const serviceID = 'service_b4fgmrr';
    const templateID = 'template_k1hs0xo';
    const userID = '4D1bxGA9qoTgEfDUo';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessageSent(true);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  useEffect(() => {
    if (queryParams.get('package')) {
      setFormData(prevState => ({
        ...prevState,
        package: queryParams.get('package')
      }));
    }
  }, [queryParams]);

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
              <p>We will need your Name and Email Address but you won't get anything other than your reply.</p>
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
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-section">
                <div className="row-inputs">
                  <label>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jane" required />
                    {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                  </label>
                  <label>
                    Last Name(Optional):
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                  </label>
                </div>
                <label>
                  Email/Company Email:
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g janedoe@gmail.com" required />
                  {formErrors.email && <span className="error">{formErrors.email}</span>}
                </label>
                <label>
                  Phone Number:
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g 0791880412" required />
                  {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                </label>
                <label>
                  Company (Optional):
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company/Brand or Business" />
                </label>
              </div>
              <Button text={"Next"} width={"200px"} showArrow={true} to={"#request-details"} onClick={handleNextClick} />
            </form>
          </div>
        </div>

        <div className="request-detais-form-container" id='request-details'>
          <div className="request-detais-form">
            <div className="request-detais-form-span">
              <h1>Request Details.</h1>
              <p>We will get back to you as soon as possible to get started on your project.</p>
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
                  Select Service:
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="" disabled>Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="programming">Programming</option>
                    <option value="automation">Automation</option>
                  </select>
                  {formErrors.service && <span className="error">{formErrors.service}</span>}
                </label>
                <label>
                  Project Package (Optional):
                  <select name="package" value={formData.package} onChange={handleChange}>
                    <option value="" disabled>Select Package</option>
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                  </select>
                  {formErrors.package && <span className="error">{formErrors.package}</span>}
                </label>
                <label>
                  Budget (Optional):
                  <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="What Is Your Estimated Monthly Budget For The Project?" />
                </label>
                <label>
                  Your Message:
                  <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Tell us a bit more about your request or business needs, objectives and scope of work." required></textarea>
                  {formErrors.description && <span className="error">{formErrors.description}</span>}
                </label>
              </div>
              <Button text={"Submit"} width={"200px"} showArrow={true} onClick={handleSubmit} />
              <div className="form-error-container">
              {displayError && <span className="error">{displayError}</span>}
              {messageSent && <span className="success">Your message has been sent successfully!</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
