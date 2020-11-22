import React, { useEffect, useState, useContext } from "react";
import { message, Row, Col } from "antd";
import axios from "axios";
import { LanguageContext } from "../../App";

export const EventView = () => {
  const [event, setevent] = useState();
  const { locale, setLocale, setOrientation } = useContext(LanguageContext);

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
    if (locale == "ar")
      document
        .querySelectorAll(".padding")
        .forEach((i) => i.classList.toggle("rev")); //.rev on app.css
  }, []);
  return (
    <>
      <div className="padding">
        {event && (
          <>
            <h1>{event.name}</h1>
            <img
              src={"/" + event.offerImg[0]}
              style={{
                width: "90%",
                borderRadius: "18px",
                marginBottom: "3rem",
              }}
              alt=""
            />

            <div
              id="description"
              dangerouslySetInnerHTML={{ __html: event.description }}
            ></div>
            <pre dangerouslySetInnerHTML={{ __html: event.tnc }}></pre>
          </>
        )}
      </div>
    </>
  );
};
