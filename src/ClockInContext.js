import React, { createContext, useState, useEffect } from "react";
import Employees from "./DataFake";

const ClockInContext = createContext();

const initials = Employees.people;

export function ClockInProvider({ children }) {
  const [users, setUsers] = useState(initials);
  const [historyRows, setHistoryRows] = useState([]);
  const [time, setTime] = useState("");

  // useEffect(() => {
  //     const clockIn = JSON.parse(localStorage.getItem('ClockIn'));
  //     if (clockIn) {
  //         setClockInRow(!clockIn);
  //     }
  // }, [])

  // //Saving data to local storage
  // useEffect(() => {
  //     localStorage.setItem('ClockIn', JSON.stringify(clockInRow));
  // }, [clockInRow]);

  return (
    <ClockInContext.Provider
      value={{
        historyValue: [historyRows, setHistoryRows],
        usersValue: [users, setUsers],
        timeValue: [time, setTime],
      }}
    >
      {children}
    </ClockInContext.Provider>
  );
}

export default ClockInContext;
