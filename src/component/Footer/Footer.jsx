import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-company-info">
          <h3 className="footer-company-name">doLocal</h3>
          <p>Bringing luxury and comfort to your doorstep.</p>
        </div>

        <div className="footer-contact-details">
          <h4>Contact Us</h4>
          <p>
            <strong>Email:</strong> contact@dolocal.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Luxury Lane, Suite 100, Hotel City, CA
            90210
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 doLocal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
