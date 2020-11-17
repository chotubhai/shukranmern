import React from "react";

function WhatsNew({ info, image }) {
  return (
    <div className="col-md-3">
      <div className="card-body">
        <div>
          <img src={image} style={{ width: 300 }} />
        </div>
        <p className="whatsnew">{info}</p>
        <div className="learn-more">
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
