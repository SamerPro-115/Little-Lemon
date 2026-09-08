import '../footer.css';
import Logo from '../assets/footer-logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          className="footer-logo"
          src={Logo}
          alt="Little Lemon logo"
        />

        <div className="footer-col">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>123 W Randolph St, Chicago, IL</li>
            <li>(312) 555-0148</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}