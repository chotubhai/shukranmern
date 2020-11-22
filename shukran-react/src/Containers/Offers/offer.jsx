import React, { useEffect, useState,useContext } from "react";
import "./offers.css";
// import { data } from "../media/data";
import axios from "axios";
import { Card, message } from "antd";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../App";


export const Offers = () => {
  const [offerList, setOfferList] = useState();
  const { locale, setLocale, setOrientation } = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get("http://54.84.213.218:5000/getOffers")
      .then((_offerList) => {
        setOfferList(_offerList.data);
        // setLoading(false);
      })
      .catch((err) => message.error("server error"));
    if (locale == "ar")
      document
        .querySelectorAll(".padding")
        .forEach((i) => i.classList.toggle("rev")); //.rev on app.css
  }, []);
  return (
    <>
      <div className="padding">
        <div className="offerh1">
          <FormattedMessage id="of1" />
        </div>
        <div className="offerdes">
          <FormattedMessage id="of2" />
        </div>
        <div
          style={{ paddingTop: "4rem", margin: "0 auto", textAlign: "center" }}
        >
          {offerList &&
            offerList.map((i) => (
              // <div className="offer">
              <Link to={`/offerview/${i._id}`}>
                <Card
                  className="offer"
                  style={{ width: 240 }}
                  cover={<img src={i.headerImg[0]} alt={i.name} />}
                >
                  <p style={{ fontWeight: "bold" }}>{i.name}</p>
                </Card>
              </Link>
              // </div>
            ))}
        </div>
      </div>
    </>
  );
};
