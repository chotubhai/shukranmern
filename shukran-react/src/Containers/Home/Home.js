import React from "react";
import Media from "../../Components/Media/Media";
import WhatsNew from "../../Components/WhatsNew/WhatsNew";
import OfferCard from "../../Components/OfferCard/OfferCard";
import BrandCard from "../../Components/BrandCard/BrandCard";
import Invite from "../../Components/Invite/Invite";
import { FormattedMessage } from "react-intl";
import {
  banner,
  cWorld,
  currency,
  exclusive,
  carpisa,
  cart,
  offers,
  invitation,
  invite,
  shukranOffer,
  shukran,
  ecco,
  clearTrip,
  bsf,
  bossini,
  centerPoint,
  anghami,
  bsfBanner,
  homeHabbit,
  homeBox,
  Babyshop,
  baby,
  whatsNew,
  wncb,
  ncb,
  shoeExpress,
  newCollection,
  crazyOffer,
  mobiley,
  eng,
  jana,
  shukranBanner,
  travel,
} from "../../images/image";

function Home() {
  
  return (
    <div className="home">
      <div className="wrapper">
        <div>
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="banner-content-wrap">
                    <div className="banner-title">
                      <h1 className="heading lang_change">
                        <FormattedMessage id="1" />
                      </h1>
                    </div>
                    <div className="banner-content">
                      <p className="lang_change">
                        <FormattedMessage id="2" />
                      </p>
                    </div>
                    <div className="banner-button">
                      <a href="#" className="btn lang_change">
                      <FormattedMessage id="a4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner-image">
                    <img src={banner} alt="banner" />
                  </div>
                </div>
              </div>
              {/* <Breadcrumb data={"nothing" }/> */}
            </div>
          </div>
          <Invite upper />
          <div className="smart-currency">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="currency-title">
                    <h2 className="lang_change">
                      <FormattedMessage id="4" />
                    </h2>
                  </div>
                  <div className="currency-content">
                    <p>
                      <FormattedMessage id="5" />
                    </p>
                  </div>
                  <div className="learn-more">
                    <a href="#"><FormattedMessage id="a5" /></a>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="cuurency-image">
                    <img src={currency} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invite-section">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="invite-title">
                    <h2>
                      <FormattedMessage id="6" />
                    </h2>
                  </div>
                  <div className="invite-content">
                    <p>
                      <FormattedMessage id="7" />
                    </p>
                  </div>
                  <div className="sign-up">
                    <a href="#" className="btn">
                      <FormattedMessage id="a1" />
                    </a>
                  </div>
                  <div className="contact">
                    <form>
                      <div className="form-wrapper d-flex align-items-center">
                        <div className="form-wrap">
                          <div className="contact-pre">
                            <span>+971</span>
                          </div>
                        </div>
                        <div className="enter-input d-flex align-items-center">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter your mobile number"
                          />
                          <div className="submit-btn">
                            <input
                              type="submit"
                              className="btn"
                              defaultValue="Send link"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4">
                  <Media
                    image={exclusive}
                    heading={<FormattedMessage id="m1" />}
                    info={<FormattedMessage id="m2" />}
                  />
                  <Media
                    image={cart}
                    heading={<FormattedMessage id="m3" />}
                    info={<FormattedMessage id="m2" />}
                  />

                  <Media
                    image={offers}
                    heading={<FormattedMessage id="m4" />}
                    info={<FormattedMessage id="m2" />}
                  />
                </div>

                <div className="col-md-4">
                  <Media
                    image={invitation}
                    heading={<FormattedMessage id="m5" />}
                    info={<FormattedMessage id="m2" />}
                  />

                  <Media
                    image={shukran}
                    heading="Earn Shukrans during sales"
                    info={<FormattedMessage id="m2" />}
                  />

                  <Media
                    image={invite}
                    heading="Enjoy the app advantage"
                    info={<FormattedMessage id="m2" />}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="invite-section">
            <div className="container">
              <div className="offer-title">
                <h2>
                  <FormattedMessage id="8" />
                </h2>
                <a href="#"><FormattedMessage id="a3" /></a>
              </div>
              <div className="container">
                <div className="row">
                  <WhatsNew
                    info="Shoexpress New Collection Boiler"
                    image={whatsNew}
                  />

                  <WhatsNew
                    info="Top 6 things to keep yourself bus..."
                    image={homeHabbit}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="offer-card">
            <div className="container">
              <div className="offer-title">
                <h2>
                  <FormattedMessage id="9" />
                </h2>
                <a href="#">View all</a>
              </div>
              <div className="small-arrow" />
              <div className="card-slider">
                <OfferCard
                  mainImg={baby}
                  img={Babyshop}
                  title="EXCITING OFFERS"
                  valid="2 days left"
                />

                <OfferCard
                  mainImg={shukranOffer}
                  img={homeBox}
                  title="10% - 50% OFF + Extra 15% OFF"
                  valid="6 days left"
                />

                <OfferCard
                  mainImg={bsfBanner}
                  img={bsf}
                  title="20% BONUS on converting JANA Points to Shukrans!"
                  valid="9 days left"
                  memberOnly="MEMBERS ONLY"
                />

                <OfferCard
                  mainImg={wncb}
                  img={ncb}
                  title="20% BONUS on converting LAK Points to Shukrans!"
                  valid="9 days left"
                  memberOnly="MEMBERS ONLY"
                />

                <OfferCard
                  mainImg={newCollection}
                  img={shoeExpress}
                  title=" Autumn and Winter New Collection"
                  valid="9 days left"
                />

                <OfferCard
                  mainImg={crazyOffer}
                  img={shoeExpress}
                  title="Crazy Offer"
                  valid="28 days left"
                  memberOnly="MEMBERS ONLY"
                />
              </div>
              <div className="partner">
                <div className="offer-title partner-title">
                  <h2>
                    <FormattedMessage id="10" />
                  </h2>
                  <a href="#">View all</a>
                </div>
                <div className="partner-small-arrow" />
                <div className="partner-card-slider">
                  <OfferCard
                    mainImg={wncb}
                    img={ncb}
                    title="20% BONUS on converting LAK Points to Shukrans!"
                    valid="9 days left"
                    memberOnly="MEMBERS ONLY"
                  />

                  <OfferCard
                    mainImg={baby}
                    img={Babyshop}
                    title="EXCITING OFFERS"
                    valid="2 days left"
                  />

                  <OfferCard
                    mainImg={bsfBanner}
                    img={bsf}
                    title="20% BONUS on converting LAK Points to Shukrans!"
                    valid="9 days left"
                    memberOnly="MEMBERS ONLY"
                  />

                  <OfferCard
                    mainImg={mobiley}
                    img={eng}
                    title="More options for your points"
                    valid="70 days left"
                    memberOnly="MEMBERS ONLY"
                  />

                  <OfferCard
                    mainImg={jana}
                    img={bsf}
                    title="Convert JANA Points to Shukrans"
                    valid="70 days left"
                    memberOnly="MEMBERS ONLY"
                  />

                  <OfferCard
                    mainImg={shukranBanner}
                    img={anghami}
                    title="Endless music now with Shukran &amp; Anghami!"
                    valid="70 days left"
                    memberOnly="MEMBERS ONLY"
                  />

                  <OfferCard
                    mainImg={travel}
                    img={clearTrip}
                    title="Enjoy your holidays with Shukran &amp; Cleartrip"
                    valid="65 days left"
                    memberOnly="MEMBERS ONLY"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="invite-section" style={{ marginBottom: 70 }}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="invite-title">
                    <h2>
                      <FormattedMessage id="11" />
                    </h2>
                    <a href="#">
                      <FormattedMessage id="a3" />
                    </a>
                  </div>
                  <div className="invite-content">
                    <p>
                      <FormattedMessage id="12" />
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <table className="table" style={{ marginTop: 70 }}>
                    <tbody>
                      <tr>
                        <td>
                          <div className="col-md-1">
                            <h2>
                              <FormattedMessage id="tr1" />
                            </h2>
                            <h5>
                              <FormattedMessage id="tr2" />
                            </h5>
                          </div>
                        </td>
                        <td>
                          <div className="col-md-1">
                            <h2 style={{ marginLeft: 30 }}>
                              <FormattedMessage id="tr8" />
                            </h2>
                            <h5>
                              <FormattedMessage id="tr3" />
                            </h5>
                          </div>
                        </td>
                        <td>
                          <div className="col-md-1">
                            <h2 style={{ marginLeft: 10 }}>
                              <FormattedMessage id="tr7" />
                            </h2>
                            <h5>
                              <FormattedMessage id="tr4" />
                            </h5>
                          </div>
                        </td>
                        <td>
                          <div className="col-md-1">
                            <h2>
                              <FormattedMessage id="tr6" />
                            </h2>
                            <h5 style={{ marginLeft: 10 }}>
                              <FormattedMessage id="tr5" />
                            </h5>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row bnp__row">
                <BrandCard img={anghami} name="Partners" />
                <BrandCard img={Babyshop} name="Children" />
                <BrandCard img={bossini} name="Clothing &amp; Accessories" />
                <BrandCard img={carpisa} name="Footware & Accessories" />
              </div>

              <div className="row bnp__row">
                <BrandCard img={centerPoint} name="Venues" />
                <BrandCard img={clearTrip} name="Partners" />
                <BrandCard img={cWorld} name="Partners" />
                <BrandCard img={ecco} name="View all brands &amp; partners" />
              </div>

              <div className="row no-guttersNew">
                <div className="col-md-12">
                  <a href="#" style={{ color: "#c79e59" }}>
                    <FormattedMessage id="a2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="invite-section" style={{ marginTop: 0 }}>
            <div className="container">
              <Invite />
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
