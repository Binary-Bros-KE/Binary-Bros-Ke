import React, { useState } from 'react';
import './contactForm.css';
import Quote from "/contact/quote-image.png";
import shape from "/contact/shape.png";
import Button from "../../components/genericButton/genButton";
import emailjs from 'emailjs-com';
import CircularProgress from '@mui/material/CircularProgress';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    phone: '',
    email: '',
    Message: '',
    attachment: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);
  const [displayError, setDisplayError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
    setDisplayError('');
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.Name) errors.Name = "Full Name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.Message) errors.Message = "Message is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setDisplayError('Please correct the errors in the form before submitting.');
      return;
    }

    setLoading(true);

    const serviceID = 'service_b4fgmrr';
    const templateID = 'template_k1hs0xo';
    const userID = '4D1bxGA9qoTgEfDUo';

    const templateParams = {
      firstName: formData.Name,
      phone: formData.phone,
      email: formData.email,
      description: formData.Message,
      packageName: formData.attachment,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        setMessageSent(true);
      }, (error) => {
        console.log('FAILED...', error);
        setLoading(false);
        setDisplayError('Failed to send the message. Please try again later.');
      });
  };

  return (
    <main>
      <section className="quote-contact">
        <div className="quote-container">
          <div className="quote-left">
            <div className="quote-left-head">
              <h2>Contact Us</h2>
              <h1>Let's work together<span>.</span></h1>
              <h3>Alternatively, Reach Us through: 
                <a href="mailto:binarybroske@gmail.com"> binarybroske@gmail.com</a> 
                &nbsp; or call <span>+254 791 880 412</span>
              </h3>
            </div>
            <div className="quote-form">
              <form onSubmit={handleSubmit}>
                <div className="form-input">
                  <input
                    className='quote-form-input'
                    type="text"
                    name='Name'
                    placeholder='Full Name'
                    value={formData.Name}
                    onChange={handleChange}
                    required
                  />
                  <label className='quote-label'>Full Name</label>
                  <i className="icon fa fa-address-card"></i>
                  {formErrors.Name && <span className="error">{formErrors.Name}</span>}
                </div>
                <div className="form-input">
                  <input
                    className='quote-form-input'
                    type="text"
                    name='phone'
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label className='quote-label'>Phone Number</label>
                  <i className="icon fa fa-phone"></i>
                  {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                </div>
                <div className="form-input">
                  <input
                    className='quote-form-input'
                    type="text"
                    name='email'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className='quote-label'>Email Address</label>
                  <i className="icon fa fa-envelope"></i>
                  {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div className="form-input textarea">
                  <textarea
                    className='quote-form-input'
                    name="Message"
                    placeholder='What can we do for you.?'
                    value={formData.Message}
                    onChange={handleChange}
                    required
                  />
                  <label className='quote-label'>What can we do for you.?</label>
                  <i className="icon fa fa-inbox"></i>
                  {formErrors.Message && <span className="error">{formErrors.Message}</span>}
                </div>

                <div className="form-buttons">
                  <button className='upload'>
                    <span>
                      <i className="fa fa-paperclip"></i>Attachments
                    </span>
                    <input
                      type="file"
                      name='attachment'
                      onChange={handleChange}
                    />
                  </button>
                  <div className="submitt-button">
                  {loading ? <CircularProgress /> : <Button text={'Send Message'} width={'180px'} showArrow={true} onClick={handleSubmit} />}
                  </div>
                </div>
              </form>
              <div className="form-error-container">
                
                {displayError && <span className="error">{displayError}</span>}
                {messageSent && <p className='success'>Message sent successfully. We will get back to you soon.</p>}
              </div>
            </div>
          </div>
          <div className="quote-right">
            <div className="quote-right-image">
              <img src={Quote} alt="binary-bros-premises" />
              <div className="image-shadow"></div>
              <img className='shape-shadow' src={shape} alt="shape-shadow" />
            </div>
            <div className="quote-socials">
              <ul>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactForm;
