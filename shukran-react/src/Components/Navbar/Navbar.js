import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import logo from './logo.png';
import {  UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export const Navbar = () => {
  const [visible, showDrawer] = useState();

  return (
    <div className="nav" style={{ display: "flex", padding: "08px 20px" }}>
      <div className="left" style={{ margin: "auto 0", padding: "0 10px" }}>
        <Link to="/">
          <img src={logo} height="50px" alt="" />
        </Link>
      </div>
      <div
        className="centre md"
        style={{ flex: "1", justifyContent: "center" }}
      >
        <Menu mode="horizontal">
          <SubMenu key="SubMenu" title="About">
            <Menu.Item key="setting:3" style={{ textAlign: "left" }}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="setting:4" style={{ textAlign: "left" }}>
              <Link to="/rules">Programmes Rules</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item>
            <Link to="/offers">Offers</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/events">Events</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="right md">
        <Menu mode="horizontal">
          <Menu.Item key="3">
            <Link to="/login">
            <UserOutlined />
            </Link>
          </Menu.Item>
        </Menu>
      </div>

      <div className="right mob">
        <Button
          className="barsMenu"
          type="primary"
          onClick={() => showDrawer(true)}
        >
          <span className="barsBtn">&#x2630;</span>
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={() => showDrawer(false)}
          visible={visible}
        >
          {/* middle menu */}
          <Menu mode="vertical">
            <SubMenu key="SubMenu" title="About">
              <Menu.Item key="setting:3" style={{ textAlign: "left" }}>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="setting:4" style={{ textAlign: "left" }}>
                <Link to="/rules">Programmes Rules</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item>
              <Link to="/offers">All Cards</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/brand">All Brands</Link>
            </Menu.Item>
          </Menu>

          {/* Right Menu */}
          <Menu mode="vertical">
            <Menu.Item key="3">
              <Link to="/login">
              <UserOutlined />
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};
