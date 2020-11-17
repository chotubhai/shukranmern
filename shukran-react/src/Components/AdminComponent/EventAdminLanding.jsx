import React, { useState } from "react";
import { Row, Col,Button } from "antd";
import { EventCreate } from "../../Components/AdminComponent/EventCreate";
import { EventList } from "../../Components/AdminComponent/EventList";

export const EventAdminLanding = () => {
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

      {task && task == "create" ? <EventCreate /> : ""}
      {task && task == "list" ? <EventList /> : ""}
    </>
  );
};
