import React, { useEffect, useState } from "react";
import { message, Row, Col } from "antd";
import axios from "axios";
export const EventView = () => {
  const [event, setevent] = useState();
  useEffect(() => {
    axios
      .post("http://54.84.213.218:5000/getEventsById", {
        _id: window.location.href.split("/")[
          window.location.href.split("/").length - 1
        ],
      })
      .then((res) => {
        setevent(res.data);
      })
      .catch((err) => message.error("server error"));
  }, []);
  return (
    <>
      {event && (
        <div className="padding">
          <h1>{event.name}</h1>
          <img
            src={"/" + event.offerImg[0]}
            style={{ width: "90%", borderRadius: "18px", marginBottom: "3rem" }}
            alt=""
          />

          <div
            id="description"
            dangerouslySetInnerHTML={{ __html: event.description }}
          ></div>
          <pre dangerouslySetInnerHTML={{ __html: event.tnc }}></pre>
        </div>
      )}
    </>
  );
};
