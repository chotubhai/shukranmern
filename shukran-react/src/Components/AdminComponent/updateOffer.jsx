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

export const UpdateOffer = () => {
  const [offer, setOffer] = useState();
  const [headerImg, setHeaderImg] = useState([]);
  const [offerImg, setOfferImg] = useState([]);
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
      .post("/getOffersById", { _id })
      .then((_offer) => {
        setOffer(_offer.data);
      })
      .catch((err) => message.error("server error"));
  }, []);

  const headerprops = {
    name: "file",
    action: "/upload",
    data: (file) => file.uid,
    accept: ".png",
    onRemove: (file) => {
      axios.post("/removeupload", { uid: file.uid });
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
    action: "/upload",
    data: (file) => file.uid,
    accept: ".png",
    onRemove: (file) => {
      axios.post("/removeupload", { uid: file.uid });
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
      setValidTo(offer.validto);
      message.info("Enter valid date");
      return;
    }
    axios
      .post("/updateOffer", {
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

  useEffect(() => {
    console.log(offer);
  }, [offer]);

  return (
    <>
      <div className="main">
        <Row>
          <Col span={24}>
            {offer && (
              <Form
                // {...layout}
                name="basic"
                initialValues={{name: offer.name}}
                onFinish={onFinish}
              >
                <br />
                <br />
                <br />
                <Form.Item
                  label="Offer title"
                  name="name"
                  rules={[{ required: true, message: "Please input title!" }]}
                >
                  <Input value={offer.name} />
                </Form.Item>

                <Upload {...headerprops}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <br />
                <br />
                <Upload {...offerprops}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <br />
                <br />

                <JoditEditor ref={editor} value={offer.description} />
                <JoditEditor ref={tnceditor} value={offer.tnc} />
                <br />
                <br />

                <DatePicker
                  onChange={(date, dateString) => setValidTo(dateString)}
                  defaultValue={moment(offer.validto,'YYYY/MM/DD')}
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
