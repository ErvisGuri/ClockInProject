import React, { useContext, useEffect, useState } from "react";

import { MoreOutlined } from "@ant-design/icons";
import ScrollToBottom from "react-scroll-to-bottom";

import "../NoClockIn/NoClockIn.css";
import ClockInContext from "../../../ClockInContext";

const NoClockIn = () => {
  const { historyValue, usersValue } = useContext(ClockInContext);
  const [historyRows, setHistoryRows] = historyValue;
  const [users] = usersValue;
  const [noClockedIn, setNoClockedIn] = useState(findNoClockedInEmps());

  useEffect(() => {
    setNoClockedIn(findNoClockedInEmps());
  }, [historyRows]);

  function findNoClockedInEmps() {
    var noClockedIn = [];
    users.forEach((obj) => {
      if (historyRows?.filter((row) => row.empId === obj.id).length === 0) {
        noClockedIn.push(obj);
      }
    });
    return noClockedIn;
  }

  return (
    <div className="NoClockIn_container">
      <div className="header-NoClockIn">
        <p>{`Punonjësit që nuk kanë bërë Clock In (${noClockedIn?.length})`}</p>
        <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      <ScrollToBottom className="row_container">
        {noClockedIn?.map((emp, key) => {
          return (
            <div key={key} className="body-NoClckIn">
              <p>{emp.name}</p>
              <p>{emp.departament}</p>
            </div>
          );
        })}
      </ScrollToBottom>
    </div>
  );
};

export default NoClockIn;
