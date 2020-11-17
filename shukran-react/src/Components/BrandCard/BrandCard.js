import React from "react";

function BrandCard({ img, name }) {
  return (
    <div className="col-md-3" style={{ padding: ".625rem!important" }}>
      <div className="box bnp__brnd">
        <div className="boxlogo">
          <img src={img} className="boximg" />
        </div>
        <p className="id">{name}</p>
      </div>
    </div>
  );
}

export default BrandCard;
