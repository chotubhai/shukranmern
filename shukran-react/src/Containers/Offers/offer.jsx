import React,{useEffect,useState} from "react";
import "./offers.css";
// import { data } from "../media/data";
import axios from 'axios';
import { Card,message } from "antd";
import {Link} from 'react-router-dom'

export const Offers = () => {
    const [offerList, setOfferList] = useState();

    useEffect(() => {
        axios
          .get("http://54.84.213.218:5000/getOffers")
          .then((_offerList) => {
            setOfferList(_offerList.data);
            // setLoading(false);
          })
          .catch((err) => message.error("server error"));
      }, []);
  return (
    <>

      <div className="padding">
        <div className="offerh1">ALL Gift Card:</div>
        <div className="offerdes">Don't miss these great deals.</div>
        <div style={{paddingTop: "4rem",margin:"0 auto",textAlign:"center"}}>
          {offerList && offerList.map((i) => (
            // <div className="offer">
            <Link to={`/offerview/${i._id}`}>
            <Card className="offer"
            style={{ width: 240}}
            cover ={ <img src={i.headerImg[0]} alt={i.name} />}
            >

              <p style={{fontWeight:"bold"}}>{i.name}</p>
            </Card>
            </Link>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};
