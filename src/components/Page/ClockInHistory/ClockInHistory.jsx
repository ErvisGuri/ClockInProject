import React, { useContext, useEffect } from "react";

import ScrollToBottom from "react-scroll-to-bottom";
import { MoreOutlined } from "@ant-design/icons";
import moment from "moment";

import io from "socket.io-client";

import ClockInContext from "../../../ClockInContext";

import "../ClockInHistory/ClockInHistory.css";
const socket = io.connect("http://localhost:3001");

const ClockInHistory = () => {
  const { historyValue } = useContext(ClockInContext);
  const [historyRows] = historyValue;

  const time1 = moment(1659439800505).format("HH:mm");
  const time2 = moment(1659440100235).format("HH:mm");

  const colorTime = (color) => {
    if (moment(color).format("HH:mm") > time2) {
      return "red";
    } else if (
      time1 < moment(color).format("HH:mm") &&
      moment(color).format("HH:mm") <= time2
    ) {
      return "orange";
    } else if (moment(color).format("HH:mm") <= time1) {
      return "green";
    }
  };

  console.log(historyRows);

  return (
    <div className="history_container">
      <div className="header-history">
        <p>Historiku i turneve</p>
        <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      <ScrollToBottom className="row_container">
        {historyRows?.map((row, key) => {
          return (
            <div key={key} className="clockInRow">
              <div className="emri-line">
                <span>{`${row.name} bëri Clock In në orën`}</span>
                <span className="line"></span>
              </div>
              <div className="END" style={{ background: colorTime(row?.time) }}>
                {moment(row.time).format("HH:mm")}
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
  );
};

export default ClockInHistory;
