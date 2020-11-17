import React, { useEffect, useState } from "react";
import { List, message, Skeleton } from "antd";
import axios from "axios";
import {Link} from 'react-router-dom';

export const OfferList = () => {
  const [offerList, setOfferList] = useState();
  const [loading, setLoading] = useState(true);

function deleteOffer(item){
  axios.post("/deleteOffer",{_id :item._id}).then(()=>{
    window.location.reload();
  }) .catch((err) => message.error("server error"));
}

  useEffect(() => {
    axios
      .get("/getOffers")
      .then((_offerList) => {
        setOfferList(_offerList.data);
        setLoading(false);
      })
      .catch((err) => message.error("server error"));
  }, []);

  useEffect(() => {
    console.log(offerList)
  }, [offerList])
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={offerList}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Link to={`/admin/updateOffer/${item._id}`} text="156" key="list-vertical-star-o">
                edit
              </Link>,
              <a onClick={() => deleteOffer(item)} text="156" key="list-vertical-like-o">
                delete
              </a>,
            ]}
            extra={!loading && <img style={{paddingLeft:"20px"}} width={272} alt="logo" src={item.headerImg[0]} />}
          >
            <Skeleton loading={loading} active avatar>
              <List.Item.Meta
                title={<a href={item.href}>{item.name}</a>}
                description={item.validto}
              />
              {item.description}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};
