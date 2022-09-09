import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-centered">
      <hr />
      <footer className="footer">
        <div className="footer__links">
          <ul>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <span>Follow us</span>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="/assets/img/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="/assets/img/twitter.svg" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
