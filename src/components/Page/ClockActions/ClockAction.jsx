import React, { useEffect, useState, useContext } from "react";

import { Select } from "antd";

import "antd/dist/antd.css";
import "../ClockActions/clockAction.css";

import io from "socket.io-client";

import ClockInContext from "../../../ClockInContext";

import { Button } from "antd";
import { TimePicker } from "antd";
import moment, { invalid } from "moment";
const format = "HH:mm";
const { Option } = Select;
const socket = io.connect("http://localhost:3001");

const ClockAction = () => {
  const { historyValue, usersValue, timeValue } = useContext(ClockInContext);
  const [historyRows, setHistoryRows] = historyValue;
  const [time, setTime] = timeValue;
  const [users, setUsers] = usersValue;
  const [selectedEmp, setSelectedEmp] = useState();
  const [shift, setShift] = useState(false);

  const date = time;

  const handleSubmit = () => {
    const newClockIn = {
      name: selectedEmp.name,
      empId: selectedEmp.id,
      time: time,
    };
    socket.emit("send_record", newClockIn);
    setHistoryRows([...historyRows, newClockIn]);
  };

  const handleChange = (value) => {
    setSelectedEmp(users[value]);
  };

  const onChangeTime = (time) => {
    setTime(time.valueOf());
  };

  useEffect(() => {
    socket.on("receive_record", (data) => {
      console.log("2", data);
      setHistoryRows([...historyRows, data]);
      console.log(data);
    });
  }, [socket]);

  return (
    <div className="actions_container">
      <div className="header-actions">
        <span>Veprime Turni</span>
        <Select
          defaultValue="Users"
          style={{
            width: 100,
            height: 30,
          }}
          onChange={handleChange}
        >
          {users?.map((emp, key) => (
            <Option key={key} value={key}>
              {emp.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="body-actions">
        <p style={{ textAlign: "center", marginTop: "6px", color: "red" }}>
          {moment().format(format)}
        </p>
        <p>{`Turni ka filluar në orën ${
          !!date ? moment(date).format("HH:mm") : ""
        }!`}</p>
        {shift ? (
          <div className="clock-button">
            <Button
              type="primary"
              danger
              style={{ borderRadius: 8, width: 170, height: 30 }}
              onClick={handleSubmit}
            >
              Mbaroi Turnin
            </Button>
            <TimePicker
              defaultValue={time}
              onChange={onChangeTime}
              format={format}
              style={{ width: 90 }}
            />
          </div>
        ) : (
          <div className="clock-button">
            <Button
              type="primary"
              danger
              style={{ borderRadius: 8, width: 170, height: 30 }}
              onClick={handleSubmit}
            >
              Filloi Turnin
            </Button>
            <TimePicker
              defaultValue={time}
              onChange={onChangeTime}
              format={format}
              style={{ width: 90 }}
            />
          </div>
        )}

        <h3
          style={{
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          Punë të mbarë!
        </h3>
      </div>
    </div>
  );
};

export default ClockAction;
