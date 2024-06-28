import React from "react";
import './quoteForm.css'
import email from "../../../public/contact/email.png";
import location from "../../../public/contact/location.png";
import phone from "../../../public/contact/phone.png";
import shape from "../../../public/contact/shape.png";

const QuoteForm = () => {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  return (
    <section className="contact">
          <div className="contact-header">
              <h3>Fill in your details.</h3>
              <h1>Get an Instant Quote Now.!</h1>
        </div>
      <div>
        <div class="container">
          <span class="big-circle"></span>
          <img src={shape} class="square" alt="" />
          <div class="form">
            <div class="contact-info">
              <h3 class="title">Let's get in touch</h3>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>

              <div class="info">
                <div class="information">
                  <img src={location} class="icon" alt="" />
                  <p>Mfangano Street, Nairobi Kenya</p>
                </div>
                <div class="information">
                  <img src={email} class="icon" alt="" />
                  <p>binarybroske@gmail.com</p>
                </div>
                <div class="information">
                  <img src={phone} class="icon" alt="" />
                  <p>+254 724 124 872</p>
                </div>
              </div>

              <div class="social-media">
                <p>Connect with us :</p>
                <div class="social-icons">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <span class="circle one"></span>
              <span class="circle two"></span>

              <form action="index.html" autocomplete="off">
                <h3 class="title">Contact us</h3>
                <div class="input-container">
                  <input type="text" name="name" class="input" />
                  <label for="">Your Name</label>
                  <span>Your Name</span>
                </div>
                <div class="input-container">
                  <input type="email" name="email" class="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div class="input-container">
                  <input type="tel" name="phone" class="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div class="input-container select-container">
                    <select name="service" class="input">
                      <option value="Select Service">Select Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Mobile Apps">Mobile Apps</option>
                      <option value="S.E.O">S.E.O</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Wordpress Dev">Wordpress Dev</option>
                      <option value="Web Hosting">Web Hosting</option>
                    </select>
                    {/* <label for="phone">Phone</label> */}
                    {/* <span>Phone</span> */}
                  </div>

                <div class="input-container textarea">
                  <textarea name="message" class="input"></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Get Quote" class="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
