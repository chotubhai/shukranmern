import React, { useEffect, useState, useContext } from "react";
import "./events.css";
import axios from "axios";
import { Card, message } from "antd";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../App";
const { Meta } = Card;

export const Events = () => {
  const [offerList, setOfferList] = useState();
  const { locale, setLocale, setOrientation } = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getEvents")
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
          <FormattedMessage id="e1" />
        </div>
        <div className="offerdes">
          <FormattedMessage id="e2" />
        </div>
        <div
          style={{ paddingTop: "4rem", margin: "0 auto", textAlign: "center" }}
        >
          {offerList &&
            offerList.map((i) => (
              // <div className="offer">
              <Link to={`/eventview/${i._id}`}>
                <Card
                  className="offer"
                  cover={
                    <img
                      src={i.headerImg[0]}
                      height="100%"
                      width="100%"
                      alt=""
                    />
                  }
                >
                  <Meta title={i.name} />
                </Card>
              </Link>
              // </div>
            ))}
        </div>
      </div>
      );
    </>
  );
};
