import React, { useContext } from "react";

import ScrollToBottom from "react-scroll-to-bottom";
import { MoreOutlined } from "@ant-design/icons";
import Employee from "../../../DataFake";
import moment from "moment";

import ClockInContext from "../../../ClockInContext";

import "../ClockInHistory/ClockInHistory.css";

const ClockInHistory = () => {
  const { historyValue, usersValue, timeValue } = useContext(ClockInContext);
  const [historyRows, setHistoryRows] = historyValue;
  const [usersRow, setUsersRow] = historyValue;
  const [time, setTime] = timeValue;

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
              <div className="END">{moment(row.time).format("HH:mm")}</div>
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
  );
};

export default ClockInHistory;
