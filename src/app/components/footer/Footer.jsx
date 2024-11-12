"use client";
import { useRef, useState } from "react";
import "./Footer.css";
import Navbar from "../navbar/Navbar";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rs6fa0k", "template_u2opf95", formRef.current, {
        publicKey: process.env.NEXT_PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();

          setTimeout(() => {
            setDone(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer-container" id="contact">
      <div className="footer-content-container">
        <div className="footer-content">
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="footer-form">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="user_name">NAME</label>
              <input type="text" name="user_name" />
            </div>
            <div className="input-group">
              <label htmlFor="user_email">EMAIL ADDRESS</label>
              <input type="email" name="user_email" />
            </div>
            <div className="input-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea name="message" rows="4"></textarea>
            </div>
            <button type="submit" className="contact-button">
              SEND MESSAGE
            </button>
            {done && <p className="thanks">Thank you... will reply ASAP</p>}
          </form>
        </div>
      </div>
      <div className="footer-nav">
        <hr />
        <Navbar />
      </div>
    </div>
  );
};

export default Footer;
