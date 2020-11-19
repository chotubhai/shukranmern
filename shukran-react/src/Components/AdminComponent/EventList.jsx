import React, { useEffect, useState } from "react";
import { List, message, Skeleton } from "antd";
import axios from "axios";
import {Link} from 'react-router-dom';

export const EventList = () => {
  const [eventList, seteventList] = useState();
  const [loading, setLoading] = useState(true);

function deleteOffer(item){
  axios.post("http://54.84.213.218:5000/deleteEvent",{_id :item._id}).then(()=>{
    window.location.reload();
  }) .catch((err) => message.error("server error"));
}

  useEffect(() => {
    axios
      .get("http://54.84.213.218:5000/getEvents")
      .then((_eventList) => {
        seteventList(_eventList.data);
        setLoading(false);
      })
      .catch((err) => message.error("server error"));
  }, []);

  useEffect(() => {
    console.log(eventList)
  }, [eventList])
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={eventList}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Link to={`/admin/updateEvent/${item._id}`} text="156" key="list-vertical-star-o">
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
