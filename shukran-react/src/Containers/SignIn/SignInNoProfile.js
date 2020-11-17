import React from "react";
import BrandButton from "../../Components/BrandButton/BrandButton";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./noProfile.css";

function SignInNoProfile() {
  return (
    <main className="main-wrpr body-content">
      <Breadcrumb data="Sign Up" />
      <div className="bg-white px-3 px-md-10 container">
        <div className="row">
          <div
            style={{ paddingLeft: "160px", paddingRight: "160px" }}
            className="col-md-8 mx-auto px-md-6"
          >
            <div className="row">
              <div className="col">
                <div className="page-hdr__cntr mt-md-4 mt-3">
                  <h1
                    style={{ fontSize: "46px" }}
                    className="page-hdr__cntr__ttl text-center"
                  >
                    Welcome to Shukran!
                  </h1>

                  <p className="page-hdr__cntr__ttl--sub text-center">
                    Login with your Shukran card number or sign up for a new
                    account.
                  </p>
                </div>

                <BrandButton title="Login with your Shukran Card" card />
                <BrandButton title="Sign Up for a new account" border />
              </div>
            </div>
          </div>

          <div>
            <div id="signInConfirmModal___BV_modal_outer_">
              <div
                id="signInConfirmModal"
                role="dialog"
                aria-hidden="true"
                className="modal fade"
                style={{ display: "none" }}
              >
                <div className="modal-dialog modal-md">
                  <div
                    tabIndex={-1}
                    role="document"
                    aria-describedby="signInConfirmModal___BV_modal_body_"
                    className="modal-content"
                  >
                    <div
                      id="signInConfirmModal___BV_modal_body_"
                      className="modal-body"
                    >
                      <div className="container-fluid">
                        <div className="row">
                          <div className="cnfrm-mbl-mdl mdl__body col-md-16">
                            <h2 className="cnfrm-mbl-mdl__hdng">
                              Confirm email id
                            </h2>

                            <p className="cnfrm-mbl-mdl__txt">
                              Verification code will be sent to your given email
                              id
                              <span className="cnfrm-mbl-mdl__no">
                                mm@demo.com
                              </span>
                            </p>

                            <div role="group" className="mt-30">
                              <div
                                id="mdl-btn-one-QA"
                                className="bttn bttn--block bttn--ylw bttn--xl bttn--rspnsv"
                              >
                                Confirm
                              </div>
                            </div>

                            <div
                              id="mdl-btn-two-QA"
                              className="bttn bttn--rspnsv bttn--block bttn--brdr"
                            >
                              Try other email id
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spcng-b--250 spcng-b--60__mbl" />
    </main>
  );
}

export default SignInNoProfile;
