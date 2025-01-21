import React from "react";
import { Link } from "react-router-dom"; // For React Router navigation
import "../Components/Common/CSS/Footer.css"
// import footerLogo from "../../assets/bicsi-Icon.png"; // Adjust path accordingly

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-f">
            {/* Footer Menu */}
            <div className="footer-menu">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/service">SERVICES</Link>
                </li>
                <li>
                  <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li>
                  <Link to="/principle">PRINCIPLES</Link>
                </li>
                <li>
                  <Link to="/news">NEWS</Link>
                </li>
                <li>
                  <Link to="/career">CAREERS</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
