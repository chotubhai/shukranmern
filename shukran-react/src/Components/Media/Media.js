import React from "react";

function Media({ image, info, heading }) {
  return (
    <div className="media">
      <img src={image} className="mr-3" />
      <div className="media-body">
        <h5 className="mt-0">{heading}</h5>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default Media;
