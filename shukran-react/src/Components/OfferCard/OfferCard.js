import React from "react";

function OfferCard({ mainImg, img, title, valid, memberOnly }) {
  return (
    <div className="card">
      <img src={mainImg} className="card-img-top" />
      <div className="card-body">
        <div className="card-img">
          <img src={img} />
        </div>
        <br />
        <p className="card-text">{title}</p>
        <div className="member-offer">
          {memberOnly ? (
            <div className="tag">
              <p>MEMBERS ONLY</p>
            </div>
          ) : (
            <>
              <br /> <br />
            </>
          )}

          <div className="days-left marginbottom">
            <p>{valid}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
