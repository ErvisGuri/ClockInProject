import React, { useContext } from "react";

import "../ClockInLate/ClockInLate.css";

import moment from "moment";

import { MoreOutlined } from "@ant-design/icons";
import ClockInContext from "../../../ClockInContext";
import ScrollToBottom from "react-scroll-to-bottom";

const ClockInLate = () => {
  const { historyValue } = useContext(ClockInContext);
  const [historyRows] = historyValue;

  const time1 = moment(1659439800505).format("HH:mm");
  const time2 = moment(1659440100235).format("HH:mm");

  const late = historyRows?.filter?.(
    (el) => moment(el.time).format("HH:mm") > time1
  );

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

  return (
    <div className="ClockIn_Container">
      <div className="header-ClockIn">
        <p>{`Clock In me vonesë (${late.length})`}</p>
        <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      <ScrollToBottom className="row_container">
        {late.map((row, key) => {
          return (
            <div key={key} className="clockLateRow">
              <div className="emri-line-late">
                <span>{row?.name}</span>
                <span className="line-late"></span>
              </div>
              <div
                style={{ background: colorTime(row?.time) }}
                className="hoursLatee"
              >
                {moment(row.time).format("HH:mm")}
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
  );
};

export default ClockInLate;
