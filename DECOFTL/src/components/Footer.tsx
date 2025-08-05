
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} DECOFTL. All rights reserved.</p>
        <ul className="social-media">
  <li>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: '#1877F2' }} />
    </a>
  </li>
  <li>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} size="lg"  style={{ color: '#1DA1F2' }}/>
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: '#E1306C' }} />
    </a>
  </li>
</ul>

      </div>
    </footer>
  );
}


















export default Footer;