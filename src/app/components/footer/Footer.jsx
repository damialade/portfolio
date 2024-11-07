import "./Footer.css";
import Navbar from "../navbar/Navbar";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-content">
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="footer-form">
          <form>
            <div className="input-group">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" />
            </div>
            <div className="input-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="contact-button">
              SEND MESSAGE
            </button>
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
