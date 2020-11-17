import React, { useState } from "react";
import { Row, Col,Button } from "antd";
import { OfferCreate } from "../../Components/AdminComponent/offerCreate";
import { OfferList } from "../../Components/AdminComponent/OfferList";
export const OfferAdminLanding = () => {
  const [task, setTask] = useState("create"); // only list and create and update

  return (
    <>
      <Row  justify="center" gutter={[16]}>
        <Col>
          <Button onClick={() => setTask("create")}>Create</Button>
        </Col>
        <Col>
          <Button onClick={() => setTask("list")}>List</Button>
        </Col>
      </Row>

      {task && task == "create" ? <OfferCreate /> : ""}
      {task && task == "list" ? <OfferList /> : ""}
    </>
  );
};
