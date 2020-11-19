import React, { useEffect, useState } from "react";
import "./events.css";
import axios from "axios";
import { Card, message } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export const Events = () => {
  const [offerList, setOfferList] = useState();

  useEffect(() => {
    axios
      .get("http://54.84.213.218:5000/getEvents")
      .then((_offerList) => {
        setOfferList(_offerList.data);
        // setLoading(false);
      })
      .catch((err) => message.error("server error"));
  }, []);
  return (
    <>
      <div className="padding">
        <div className="offerh1">ALL Events:</div>
        <div className="offerdes">Don't miss these great deals.</div>
        <div
          style={{ paddingTop: "4rem", margin: "0 auto", textAlign: "center" }}
        >
          {offerList &&
            offerList.map((i) => (
              // <div className="offer">
              <Link to={`/eventview/${i._id}`}>
                <Card className="offer" cover={<img src={i.headerImg[0]}  height="100%" width="100%" alt="" />}>
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
