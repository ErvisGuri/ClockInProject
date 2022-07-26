import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";
import { MoreOutlined } from "@ant-design/icons";
import Employee from "../../../DataFake";

import "../ClockInHistory/ClockInHistory.css";

const ClockInHistory = () => {
  const date = new Date();
  const hours = date.getHours() + ":" + date.getMinutes();

  const data = Employee.people;

  return (
    <div className="history_container">
      <div className="header-history">
        <p>Historiku i turneve</p>
        <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      <ScrollToBottom className="row_container">
        {data?.map((emp, key) => {
          return (
            <div key={key} className="clockInRow">
              <div className="emri-line">
                <span>{`${emp.name} bëri Clock In në orën`}</span>
                <span className="line"></span>
              </div>
              <div className="END">{hours}</div>
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
  );
};

export default ClockInHistory;
