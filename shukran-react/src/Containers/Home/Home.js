import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Media from "../../Components/Media/Media";
import WhatsNew from "../../Components/WhatsNew/WhatsNew";
import OfferCard from "../../Components/OfferCard/OfferCard";
import BrandCard from "../../Components/BrandCard/BrandCard";
import Invite from "../../Components/Invite/Invite";
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
                      <h1 className="heading lang_change" >
                        Experience endless possibilities with our Shukran app.
                      </h1>
                    </div>
                    <div className="banner-content">
                      <p className="lang_change">
                        Now enjoy big benefits and the freedom of cardless
                        transactions with our fast, easy and user-friendly app.
                      </p>
                    </div>
                    <div className="banner-button">
                      <a href="#" className="btn lang_change">
                        Let's get started
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
                    <h2 className="lang_change">Smart currency. Great rewards!</h2>
                  </div>
                  <div className="currency-content">
                    <p>
                      Welcome to Shukran, the Landmark Group’s award-winning
                      retail loyalty programme. The largest of its kind in the
                      Middle East, Shukran rewards customers as they shop across
                      a range of the Group’s brands and other partner brands.
                    </p>
                  </div>
                  <div className="learn-more">
                    <a href="#">Learn more</a>
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
                    <h2>We invite you to a world of exclusive benefits</h2>
                  </div>
                  <div className="invite-content">
                    <p>
                      Join us today for instant savings, special privileges and
                      a whole lot more!
                    </p>
                  </div>
                  <div className="sign-up">
                    <a href="#" className="btn">
                      Sign up
                    </a>
                  </div>
                  <span>Send the app link directly to your phone.</span>
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
                    heading="Get exclusive offer"
                    info="Enjoy special, personalised deals from your favourite brands."
                  />
                  <Media
                    image={cart}
                    heading="Enjoy rewards online"
                    info=" Enjoy special, personalised deals from your favourite
                    brands."
                  />

                  <Media
                    image={offers}
                    heading="Get member-only emails"
                    info="Enjoy special, personalised deals from your favourite
                    brands."
                  />
                </div>

                <div className="col-md-4">
                  <Media
                    image={invitation}
                    heading="Receive special invitations"
                    info="Enjoy special, personalised deals from your favourite
                    brands."
                  />

                  <Media
                    image={shukran}
                    heading="Earn Shukrans during sales"
                    info="Enjoy special, personalised deals from your favourite
                    brands."
                  />

                  <Media
                    image={invite}
                    heading="Enjoy the app advantage"
                    info="Enjoy special, personalised deals from your favourite
                    brands."
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="invite-section">
            <div className="container">
              <div className="offer-title">
                <h2>What's new</h2>
                <a href="#">View all</a>
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
                <h2>Latest offers</h2>
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

                {/* <div className="card">
                  <img
                    src="images/ksa---crazy-offer-1603116056.jpg"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="card-img">
                      <img src="images/oc2xShoexpress.png" />
                    </div>
                    <br />
                    <p className="card-text">Crazy Offer</p>
                    <div className="member-offer">
                      <br />
                      <br />
                      <div className="tag">
                        <p>MEMBERS ONLY</p>
                      </div>
                      <div className="days-left">
                        <p>28 days left</p>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="card">
                  <img
                    src="images/shurkan-header3008-w-x-1692px-min-1601808599.jpg"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="card-img">
                      <img src="images/Homecentre.png" />
                    </div>
                    <br />
                    <p className="card-text">20%-70% Off</p>
                    <div className="member-offer">
                      <div className="days-left marginbottom">
                        <p>3 days left</p>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="card">
                  <img
                    src="images/mobily3008x1692-web-1575551446.jpg"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="card-img">
                      <img src="images/eng-1575550763.png" />
                    </div>
                    <p className="card-text">More options for your points</p>
                    <div className="member-offer">
                      <div className="days-left marginbottom-15">
                        <p>70 days left</p>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="card">
                  <img
                    src="images/jana-2-1551707480.jpg"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="card-img">
                      <img src="images/bsf-1551707296.png" />
                    </div>
                    <p className="card-text">Convert JANA Points to Shukrans</p>
                    <div className="member-offer">
                      <div className="days-left marginbottom">
                        <p>70 days left</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="partner">
                <div className="offer-title partner-title">
                  <h2>Partner offers</h2>
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

                  {/* <div className="card">
                    <img
                      src="images/NCB Rewards_offers.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-img">
                        <img src="images/NCB.jpg" />
                      </div>
                      <p className="card-text">
                        Get lucky with Shukran &amp; NCB LAK Rewards!
                      </p>
                      <div className="member-offer">
                        <div className="tag">
                          <p>MEMBERS ONLY</p>
                        </div>
                        <div className="days-left">
                          <p>70 days left</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="card">
                    <img
                      src="images/kid-with-cw-ipad-1576681184.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-img">
                        <img src="images/cw-wide-logo1x-1576681301.png" />
                      </div>
                      <br />
                      <br />
                      <p className="card-text">Grow curious minds</p>
                      <div className="member-offer">
                        <div className="tag">
                          <p>MEMBERS ONLY</p>
                        </div>
                        <div className="days-left">
                          <p>70 days left</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="invite-section" style={{ marginBottom: 70 }}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="invite-title">
                    <h2>Brands and partners</h2>
                    <a href="#">View all</a>
                  </div>
                  <div className="invite-content">
                    <p>
                      We've got over a million products and experiences waiting
                      for you. Enjoy the best of fashion, home, baby care,
                      dining and entertainment.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <table className="table" style={{ marginTop: 70 }}>
                    <tbody>
                      <tr>
                        <td>
                          <div className="col-md-1">
                            <h2>10M+</h2>
                            <h5>Members</h5>
                          </div>
                        </td>
                        <td>
                          <div className="col-md-1">
                            <h2 style={{ marginLeft: 30 }}>8</h2>
                            <h5>Countries</h5>
                          </div>
                        </td>
                        <td>
                          <div className="col-md-1">
                            <h2 style={{ marginLeft: 10 }}>57</h2>
                            <h5>Brands</h5>
                          </div>
                        </td>
                        <td>
                          <div className="col-md-1">
                            <h2>2,000</h2>
                            <h5 style={{ marginLeft: 10 }}>Stores</h5>
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
                    View all brands &amp; partners
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
