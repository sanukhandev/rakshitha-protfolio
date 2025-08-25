import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Rakshitha Chandran</h3>
            <p className="footer-tagline">Building the future, one line of code at a time</p>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/rakshitha-chandran-414096172" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="#" className="footer-social-link">
              <Github size={20} />
            </a>
            <a href="mailto:rakshithachandran98@gmail.com" className="footer-social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Rakshitha Chandran. Made with <Heart size={16} className="heart-icon" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;