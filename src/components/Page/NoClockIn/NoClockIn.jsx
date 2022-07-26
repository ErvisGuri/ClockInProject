import React from "react";

import Employee from "../../../DataFake";
import { MoreOutlined } from "@ant-design/icons";
import ScrollToBottom from "react-scroll-to-bottom";

import "../NoClockIn/NoClockIn.css";

const NoClockIn = () => {
  const data = Employee.people;

  return (
    <div className="NoClockIn_container">
      <div className="header-NoClockIn">
        <p>Punonjësit që nuk kanë bërë Clock In (sot)</p>
        <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      <ScrollToBottom className="row_container">
        {data?.map((emp, key) => {
          return (
            <div key={key} className="body-NoClckIn">
              <p>{emp.name}</p>
              <p>{emp.depatament}</p>
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
  );
};

export default NoClockIn;
