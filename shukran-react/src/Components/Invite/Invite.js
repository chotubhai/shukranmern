import React from "react";
import ios from "../../images/ios.svg";
import android from "../../images/android.svg";
import shukranFooter from "../../images/Shukran_Footer_Desktop_310717_en@2x.webp";

function Invite({ upper }) {
  return (
    <div
      className={`${
        upper && "banner-stripe"
      } d-flex align-items-center justify-content-between`}
    >
      {!upper && (
        <img src={shukranFooter} style={{ width: 118, marginLeft: 40 }} />
      )}
      {upper ? (
        <div className="strip-text">
          <h3>
            Send the app link <br />
            directly to your phone.
          </h3>
        </div>
      ) : (
        <div className="footerset">
          <h4 style={{ fontSize: 22, color: "#242424" }}>
            Send the app link directly to your phone.
          </h4>
        </div>
      )}

      <div className="contact">
        <form>
          <div className="form-wrapper d-flex align-items-center">
            <div className="form-wrap">
              <div className="contact-pre">
                <span>+966</span>
              </div>
            </div>
            <div className="enter-input d-flex align-items-center">
              <input
                type="number"
                className="form-control"
                placeholder="Enter your mobile number"
              />
              <div className="submit-btn">
                <input type="submit" className="btn" defaultValue="Send link" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="ios-android">
        <img src={ios} style={{ marginLeft: 15 }} />
        <img src={android} />
      </div>
    </div>
  );
}

export default Invite;
