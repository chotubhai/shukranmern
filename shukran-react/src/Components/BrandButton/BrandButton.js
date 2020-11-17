import React from "react";
import { useHistory } from "react-router-dom";
import "./BrandButton.css";

function BrandButton({ border, title, card }) {
  const history = useHistory();
  return (
    <div
      style={{
        border: `${border && "1px solid #c79e59"}`,
        color: `${border ? "#c79e59" : "#fff"}`,
      }}
      class={`bttn bttn--rspnsv ${border ? "bttn--brdr" : "bttn--ylw mb-20"} 
       bttn--block oops-wrpr__btn mb-20`}
      onClick={() => history.push(`${!card ? "/signin-profile" : "/"}`)}
    >
      {title}
    </div>
  );
}

export default BrandButton;
