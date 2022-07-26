import React from "react";

import "../ClockInLate/ClockInLate.css";

import { MoreOutlined } from "@ant-design/icons";

const ClockInLate = () => {
  return (
    <div className="ClockIn_Container">
      <div className="header-ClockIn">
        <p>Clock In me vonesë (sot)</p>
        <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      <div className="clockLateRow">
        <div className="emri-line-late">
          <span>{` Ervis Guri`}</span>
          <span className="line-late"></span>
        </div>
        <div className="hoursLatee">12:21</div>
      </div>
    </div>
  );
};

export default ClockInLate;
