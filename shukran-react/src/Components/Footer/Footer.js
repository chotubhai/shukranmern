import React from "react";
import fb from "../../images/facebook.svg";
import twitter from "../../images/icons/twitter.svg";
import instagram from "../../images/icons/instagram.svg";
import youTube from "../../images/icons/youtube.svg";
import fShukran from "../../images/shukran_logo@2x.webp";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #c8c8c8" }} className="footertext">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-2 first-column">
            <div className="menu-title">
              <h6>
                <FormattedMessage id="f1" />
              </h6>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">
                    <FormattedMessage id="f2" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage id="f3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 account">
            <div className="menu-title">
              <h6>
                <FormattedMessage id="f4" />
              </h6>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">
                    <FormattedMessage id="f5" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage id="f6" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage id="f7" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 account">
            <div className="menu-title">
              <h6>
                <FormattedMessage id="f8" />
              </h6>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">
                    <FormattedMessage id="f9" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage id="f10" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage id="f11" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 connect">
            <div className="menu-title">
              <h6>
                <FormattedMessage id="f12" />
              </h6>
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
                <p>
                  <FormattedMessage id="f13" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 update">
            <div className="menu-title">
              <h5>
                <FormattedMessage id="f14" />
              </h5>
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
                <p>
                  <FormattedMessage id="f15" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row no-gutters">
          <div className="d-flex align-items-center justify-content-between">
            <img src={fShukran} style={{ width: 40, height: 40 }} />
            <p style={{ marginTop: 10, marginLeft: 20 }} className="footertext">
              <FormattedMessage id="f16" />
            </p>
          </div>
          <div style={{ float: "right" }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
