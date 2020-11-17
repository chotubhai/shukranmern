import React from "react";
import { Link } from "react-router-dom";
import "./signIn.css";
import { Form, Input, Row, Col, Typography, Divider, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { signin } from "./auth";

const { Title } = Typography;
function SignIn() {
  const onSubmit = (values) => {
    signin(values).then((data) => {
      console.log(data);
    });
  };
  return (
    <div className="auth-page-container">
      <Row style={{ width: "100%" }} justify="center">
        <Col md={{span:8}}>
          <div className="auth-container">
            <Title>SIGN IN</Title>
            <Divider />
            <Form
              name="login"
              className="login-form"
              onFinish={onSubmit}
              size="large"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignIn;
