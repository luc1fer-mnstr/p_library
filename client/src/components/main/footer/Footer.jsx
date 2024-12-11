import './footer.css'
// icons
import { IoMail } from "react-icons/io5"
import { FaPhoneAlt,FaFacebook,FaTwitter,FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Column 1: Quick Links */}
        <div className="column quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/home/about">About Us</a></li>
            <li><a href="/home/books">Books</a></li>
            <li><a href="/home/feedback">Contact</a></li>
          </ul>
        </div>

        {/* Column 2: Contact Information */}
        <div className="column contact">
          <h3>Contact Us</h3>
          <div className="info">
            <IoMail className="icon" />
            <a href="mailto:info@university.com">info@university.com</a>
          </div>
          <div className="info">
            <FaPhoneAlt className="icon" />
            <a href="tel:+959999999">+95 999 999 999</a>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

        {/* Column 3: About the Project */}
        <div className="column about-project">
          <h3>About the Project</h3>
          <p>
            This website was created by the second-year students of PIU's batch 1, aiming to provide an online library platform for students to access educational resources.
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; <span>{new Date().getUTCFullYear()}</span> PIU Online Library. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
