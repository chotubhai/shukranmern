import React, { useEffect, useState } from "react";
import { message, Carousel } from "antd";
import axios from "axios";
export const OfferView = () => {
  const [offer, setOffer] = useState();
  useEffect(() => {
    axios
      .post("http://54.84.213.218:5000/getOffersById", {
        _id: window.location.href.split("/")[
          window.location.href.split("/").length - 1
        ],
      })
      .then((res) => {
        setOffer(res.data);
      })
      .catch((err) => message.error("server error"));
  }, []);
  return (
    <>
      {offer && (
        <div className="padding">
          <h1>{offer.name}</h1>
          <Carousel>
            {offer &&
              offer.offerImg.map((i) => (
                <img src={"/" +i} style={{ width: "90%" }} alt="" />
              ))}
          </Carousel>

          <div
            id="description"
            dangerouslySetInnerHTML={{ __html: offer.description }}
          ></div>
          <pre dangerouslySetInnerHTML={{ __html: offer.tnc }}></pre>
        </div>
      )}
    </>
  );
};
