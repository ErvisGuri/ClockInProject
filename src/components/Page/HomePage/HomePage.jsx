import React from "react";
import NoClockIn from "../NoClockIn/NoClockIn";
import ClockInLate from "../ClockInLate/ClockInLate";
import ClockInHistory from "../ClockInHistory/ClockInHistory";
import ClockActions from "../ClockActions/ClockAction";

import "../HomePage/HomePage.css";

const HomePage = () => {
  return (
    <div className="main_container">
      <div className="main-actions">
        <ClockActions />
      </div>
      <div className="main-hisory">
        <ClockInHistory />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <NoClockIn />
        <ClockInLate />
      </div>
    </div>
  );
};

export default HomePage;
