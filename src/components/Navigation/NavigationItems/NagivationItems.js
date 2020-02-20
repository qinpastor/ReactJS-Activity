import React from "react";

import { Menu, Button, Dropdown, Icon, Avatar } from "antd";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
  </Menu>
);

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">
        <Icon type="unlock" />
      </NavigationItem>
    ) : (
      <Dropdown overlay={menu}>
        <a>
          <NavigationItem link="">
            <Avatar
              className={classes.Avatar}
              style={{ backgroundColor: "#87d068" }}
              icon="user"
            />
            {/* <Icon type="unlock" /> */}
          </NavigationItem>
        </a>
      </Dropdown>
    )}
  </ul>
);

export default navigationItems;
