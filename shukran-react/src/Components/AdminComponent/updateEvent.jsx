import React, { useEffect, useState, useRef } from "react";
import {
  Row,
  Col,
  Button,
  Upload,
  Form,
  Input,
  message,
  DatePicker,
} from "antd";
import JoditEditor from "jodit-react";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from 'moment';

export const UpdateEvent = () => {
  const [event, setevent] = useState();
  const [headerImg, setHeaderImg] = useState([]);
  const [eventImg, seteventImg] = useState([]);
  const [validto, setValidTo] = useState();
  const editor = useRef(null);
  const tnceditor = useRef(null);
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  useEffect(() => {
    const _id = window.location.href.split("/")[
      window.location.href.split("/").length - 1
    ];
    axios
      .post("http://localhost:5000/getEventsById", { _id })
      .then((_event) => {
        setevent(_event.data);
      })
      .catch((err) => message.error("server error"));
  }, []);

  const headerprops = {
    name: "file",
    action: "http://localhost:5000/upload",
    data: (file) => file.uid,
    accept: ".png",
    onRemove: (file) => {
      axios.post("http://localhost:5000/removeupload", { uid: file.uid });
      const index = headerImg.indexOf(file.uid + ".png");
      headerImg.splice(index, 1);
      setHeaderImg(headerImg);
    },
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        setHeaderImg([...headerImg, info.file.uid + ".png"]);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const eventprops = {
    name: "file",
    action: "http://localhost:5000/upload",
    data: (file) => file.uid,
    accept: ".png",
    onRemove: (file) => {
      axios.post("http://localhost:5000/removeupload", { uid: file.uid });
      const index = eventImg.indexOf(file.uid + ".png");
      eventImg.splice(index, 1);
      seteventImg(eventImg);
    },
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        seteventImg([...eventImg, info.file.uid + ".png"]);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const onFinish = (value) => {
    if (!validto) {
      setValidTo(event.validto);
      message.info("Enter valid date");
      return;
    }
    axios
      .post("http://localhost:5000/updateEvents", {
        ...value,
        headerImg,
        eventImg,
        description: editor.current.value,
        tnc: tnceditor.current.value,
        validto,
      })
      .then(() => message.success("event created"))
      .catch((err) => message.error("error"));
  };


  return (
    <>
      <div className="main">
        <Row>
          <Col span={24}>
            {event && (
              <Form
                // {...layout}
                name="basic"
                initialValues={{name: event.name,location:event.location}}
                onFinish={onFinish}
              >
                <br />
                <br />
                <br />
                <Form.Item
                  label="event title"
                  name="name"
                  rules={[{ required: true, message: "Please input title!" }]}
                >
                  <Input />
                </Form.Item>

                <Upload {...headerprops}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <br />
                <br />
                <Upload {...eventprops}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <br />
                <br />

                <Form.Item
                  label="event Location"
                  name="location"
                  rules={[{ required: true, message: "Please input title!" }]}
                >
                  <Input />
                </Form.Item>


                <JoditEditor ref={editor} value={event.description} />
                <JoditEditor ref={tnceditor} value={event.tnc} />
                <br />
                <br />

                <DatePicker
                  onChange={(date, dateString) => setValidTo(dateString)}
                  defaultValue={moment(event.validto,'YYYY/MM/DD')}
                />
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
