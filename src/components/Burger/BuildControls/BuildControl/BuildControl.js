import React from "react";
import { Icon } from "antd";

import classes from "./BuildControl.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      <Icon type="minus-square" />
      {/* Less */}
    </button>
    <button className={classes.More} onClick={props.added}>
      <Icon type="plus-square" />
    </button>
  </div>
);
export default buildControl;
