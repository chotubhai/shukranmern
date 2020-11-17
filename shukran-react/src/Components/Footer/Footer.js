import React from "react";
import fb from "../../images/facebook.svg";
import twitter from "../../images/icons/twitter.svg";
import instagram from "../../images/icons/instagram.svg";
import youTube from "../../images/icons/youtube.svg";
import fShukran from "../../images/shukran_logo@2x.webp";
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #c8c8c8" }} className="footertext">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-2 first-column">
            <div className="menu-title">
              <h6>My Account</h6>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Create a new account</a>
                </li>
                <li>
                  <a href="#">Sign in to shukran</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 account">
            <div className="menu-title">
              <h6>About shukran</h6>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">About the programme</a>
                </li>
                <li>
                  <a href="#">Participating brands</a>
                </li>
                <li>
                  <a href="#">Programme rules</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 account">
            <div className="menu-title">
              <h6>Help</h6>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Store locator</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 connect">
            <div className="menu-title">
              <h6>Connect with us</h6>
            </div>
            <div className="social-icons">
              <ul className="d-flex align-items-center">
                <li>
                  <a href="#" target="_blank">
                    <img src={fb} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src={twitter} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src={youTube} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src={instagram} />
                  </a>
                </li>
              </ul>
              <div className="social-note">
                <p>Like or follow us to join in the conversation</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 update">
            <div className="menu-title">
              <h5>Stay updated</h5>
            </div>
            <div className="email-section">
              <form>
                <div className="footer-form">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                  <div className="submit-mail">
                    <input type="submit" className="btn" value="Subscribe" />
                  </div>
                </div>
              </form>
              <div className="social-note">
                <p>Never miss an offer or update from your favourite brand!</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row no-gutters">
          <div className="d-flex align-items-center justify-content-between">
            <img src={fShukran} style={{ width: 40, height: 40 }} />
            <p style={{ marginTop: 10, marginLeft: 20 }} className="footertext">
              © 2010 - 2020 Landmark group
            </p>
          </div>
          <div style={{ float: "right" }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
