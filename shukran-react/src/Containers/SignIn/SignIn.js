import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./SignIn.css";

function SignIn() {
  const [mobile, setMobile] = useState(true);
  const [email, setEmail] = useState(false);
  const history = useHistory();
  const handleShow = () => {
    setMobile(!mobile);
    setEmail(!email);
  };

  return (
    <div>
      <Breadcrumb data="Sign In" />
      {/* <main className="main-wrpr body-content">
        <div className="bg-white px-5 px-md-10 container">
          <div className="row d-flex justify-content-center mx-md-4">
            <div className="col-16 col-md-8 p-1">
              <div className="row">
                <div className="col-16">
                  <div>
                    <div className="row">
                      <div className="col">
                        <div className="page-hdr__wrpr mt-md-4">
                          <h1 className="page-hdr__wrpr__ttl">
                            Enter your
                            {mobile
                              ? " mobile number"
                              : email
                              ? " email address"
                              : ""}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-16">
                        <div className="sgnup">
                          <form autoComplete="off" method="post">
                            {mobile && (
                              <div role="group" className="mb-4">
                                <label htmlFor="phone" className="inpt__lbl">
                                  Mobile Number
                                </label>
                                <div
                                  role="group"
                                  className="mb-1 grp__phn phnNmbr-div"
                                >
                                  <select
                                    id="countryCode"
                                    name="countryCode"
                                    className="slct slct--xxl slct--cstm slct--inline slct--phnNmbr pristine untouched"
                                  >
                                    <option selected="selected" value={+971}>
                                      +971
                                    </option>
                                    <option value={+966}>+966</option>
                                    <option value={+968}>+968</option>
                                    <option value={+973}>+973</option>
                                    <option value={+974}>+974</option>
                                    <option value={+965}>+965</option>
                                    <option value={+20}>+20</option>
                                    <option value={+962}>+962</option>
                                  </select>
                                  <input
                                    data-vv-as="v.phone"
                                    placeholder="50 123 4567"
                                    autoComplete="new-password"
                                    name="phone"
                                    type="number"
                                    min={0}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    className="inpt__box inpt__box--phn inpt__box--lg inpt__box__tick--dsbld input phnNmbr-div__input pristine untouched"
                                  />
                                </div>
                              </div>
                            )}
                            {email && (
                              <div role="group" className="mb-4">
                                <label htmlFor="phone" className="inpt__lbl">
                                  Email
                                </label>
                                <div
                                  role="group"
                                  className="mb-1 grp__phn phnNmbr-div"
                                >
                                  <input
                                    data-vv-as="v.phone"
                                    placeholder="Enter your email address"
                                    autoComplete="new-password"
                                    name="email"
                                    type="email"
                                    className="inpt__box inpt__box--phn inpt__box--lg inpt__box__tick--dsbld input phnNmbr-div__input pristine untouched"
                                  />
                                </div>
                              </div>
                            )}
                            <div className="group mt-md-4 mt-6">
                              <div
                                onClick={() =>
                                  history.push("/signin-no-profile")
                                }
                                value="submit"
                                className="bttn bttn--block bttn--ylw bttn--xl bttn--rspnsv"
                              >
                                Continue
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4 mb-15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="lnk--bttm-lnk">
                <div onClick={handleShow} className="lnk lnk--ylw text-center">
                  {mobile
                    ? "Or use email instead"
                    : email
                    ? "or use mobile number instead"
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main> */}
      <main class="main-wrpr body-content">
        <div class="bg-white px-3 px-md-10 container">
          <div
            style={{ paddingRight: "200px", paddingLeft: "200px" }}
            class="row mbl"
          >
            <div class="col-md-8 mx-auto px-md-6">
              <div class="row">
                <div class="col">
                  <div class="page-hdr__wrpr mt-md-4 ml-0">
                    <h1 className="page-hdr__wrpr__ttl">
                      Enter your
                      {mobile
                        ? " mobile number"
                        : email
                        ? " email address"
                        : ""}
                    </h1>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="input-wrpr">
                    <form id="signin" autocomplete="off">
                      {mobile && (
                        <div role="group" className="">
                          <label htmlFor="phone" className="inpt__lbl">
                            Mobile Number
                          </label>
                          <div role="group" className="grp__phn phnNmbr-div">
                            <select
                              id="countryCode"
                              name="countryCode"
                              className="slct slct--xxl slct--cstm slct--inline slct--phnNmbr pristine untouched"
                            >
                              <option selected="selected" value={+971}>
                                +971
                              </option>
                              <option value={+966}>+966</option>
                              <option value={+968}>+968</option>
                              <option value={+973}>+973</option>
                              <option value={+974}>+974</option>
                              <option value={+965}>+965</option>
                              <option value={+20}>+20</option>
                              <option value={+962}>+962</option>
                            </select>
                            <input
                              data-vv-as="v.phone"
                              placeholder="50 123 4567"
                              autoComplete="new-password"
                              name="phone"
                              type="number"
                              min={0}
                              inputMode="numeric"
                              pattern="[0-9]*"
                              className="inpt__box inpt__box--phn inpt__box--lg inpt__box__tick--dsbld input phnNmbr-div__input pristine untouched"
                            />
                          </div>
                        </div>
                      )}
                      {email && (
                        <div role="group" className id="inputEmail">
                          <label htmlFor="inputEmail" classname="inpt__lbl">
                            Email
                          </label>
                          <input
                            id="emailInput"
                            placeholder="Enter your email address"
                            name="email"
                            type="text"
                            className=" inpt__box inpt__box--xl width--block input pristine touched"
                          />
                        </div>
                      )}
                      <div
                        onClick={() => history.push("/signin-no-profile")}
                        style={{ marginTop: "1.75rem" }}
                        role="group"
                      >
                        <div class="bttn bttn--block bttn--ylw bttn--xl bttn--rspnsv">
                          Continue
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="text-center lnk--bttm-lnk">
                    <div
                      onClick={handleShow}
                      className="lnk lnk--ylw text-center mb-20"
                    >
                      {mobile
                        ? "Or use email instead"
                        : email
                        ? "Or use your mobile number instead"
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="spcng-b--250 spcng-b--60__mbl"></div>
      </main>
    </div>
  );
}

export default SignIn;
