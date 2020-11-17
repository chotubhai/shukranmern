import React, { useState } from "react";
import { Row, Col,Button } from "antd";
import {OfferAdminLanding} from '../../Components/AdminComponent/OfferAdminLanding';
import {EventAdminLanding} from '../../Components/AdminComponent/EventAdminLanding';

export const AdminPortal = () => {
  const [component, setComponent] = useState(""); //only offer and event

  return (
    <>
      <Row justify="center">
        <Col>
          <Row  justify="center" gutter={[16]}>
            <Col>
              <Button onClick={() => setComponent("offer")}>
                Offers
              </Button>
            </Col>
            <Col>
              <Button onClick={() => setComponent("event")}>
                Events
              </Button>
            </Col>
          </Row>
          <br />

          {component && component == "offer" ? <OfferAdminLanding /> : ""}
          {component && component == "event" ? <EventAdminLanding /> : ""}
        </Col>
      </Row>
    </>
  );
};
