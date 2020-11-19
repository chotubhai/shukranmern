import React, { useState, useRef } from "react";
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

export const EventCreate = () => {
  const [headerImg, setHeaderImg] = useState([]);
  const [offerImg, setOfferImg] = useState([]);
  const [validto, setValidTo] = useState();
  const editor = useRef(null);
  const tnceditor = useRef(null);
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const headerprops = {
    name: "file",
    action: "http://54.84.213.218:5000/upload",
    data: (file) => file.uid,
    accept: ".png",
    onRemove: (file) => {
      axios.post("http://54.84.213.218:5000/removeupload", { uid: file.uid });
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
  const offerprops = {
    name: "file",
    action: "http://54.84.213.218:5000/upload",
    data: (file) => file.uid,
    accept: ".png",
    onRemove: (file) => {
      axios.post("http://54.84.213.218:5000/removeupload", { uid: file.uid });
      const index = offerImg.indexOf(file.uid + ".png");
      offerImg.splice(index, 1);
      setOfferImg(offerImg);
    },
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        setOfferImg([...offerImg, info.file.uid + ".png"]);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (value) => {
    if (!validto) {
      message.info("Enter valid date");
      return;
    }

    axios
      .post("http://54.84.213.218:5000/createEvent", {
        ...value,
        headerImg,
        offerImg,
        description: editor.current.value,
        tnc: tnceditor.current.value,
        validto,
      })
      .then(() => message.success("offer created"))
      .catch((err) => message.error("error"));
  };

  return (
    <>
      <div className="main">
        <Row>
          <Col span={24}>
            <Form
              // {...layout}
              name="basic"
              onFinish={onFinish}
            >
              <Form.Item
                label="Event title"
                name="name"
                rules={[{ required: true, message: "Please input title!" }]}
              >
                <Input />
              </Form.Item>
              <br /> <br /> <h3>Header Img </h3>
              <Upload {...headerprops}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              <br />
              <br />
              <h3>Event Img </h3>
              <Upload {...offerprops}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              <br />
              <br />
              <h3>Location</h3>
              <Form.Item
                label="Event Location"
                name="location"
                rules={[{ required: true, message: "Please input title!" }]}
              >
                <Input />
              </Form.Item>
              <br />
              <br />
              <h3>Description</h3>
              <JoditEditor ref={editor} />
              <br />
              <br /> <h3>Term and Conditions</h3>
              <JoditEditor ref={tnceditor} />
              <br />
              <br />
              <h3>Valid To</h3>
              <DatePicker
                onChange={(date, dateString) => setValidTo(dateString)}
              />
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
