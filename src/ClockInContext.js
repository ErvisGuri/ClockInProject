import React, { createContext, useState, useEffect } from "react";
import Employees from "./DataFake";

const ClockInContext = createContext();

const initials = Employees.people;

export function ClockInProvider({ children }) {
  const [users, setUsers] = useState(initials);
  const [historyRows, setHistoryRows] = useState(() => JSON.parse(localStorage.getItem('history')) || []);
  const [time, setTime] = useState("");

  useEffect(() => {
    const clockIn = JSON.parse(localStorage.getItem('history'));
    if (clockIn) {
      setHistoryRows(historyRows);
    }
  }, [])

  //Saving data to local storage
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(historyRows));
  }, [historyRows]);

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
