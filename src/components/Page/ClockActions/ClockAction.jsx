import React, { useEffect, useState, useContext } from "react";

import { Select } from "antd";

import "antd/dist/antd.css";
import "../ClockActions/clockAction.css";

import ClockInContext from "../../../ClockInContext";

import Employee from "../../../DataFake";
import { Button } from "antd";
import { TimePicker } from "antd";
import moment from "moment";
const format = "HH:mm";
const { Option } = Select;

const ClockAction = () => {
  const { clockInValue, timeValue } = useContext(ClockInContext);
  const [clockInRow, setClockInRow] = clockInValue;
  const [time, setTime] = timeValue;
  const [selectedName, setSelectedName] = useState("");
  const data = Employee.people;

  // console.log(moment().format(format));

  const handleSubmit = () => {
    const id = Math.floor(Math.random() * 1000);
    // setClockInTime(moment().format(format));
    const newClockIn = {
      name: selectedName,
      time: time,
      id: id,
    };
    const row = data.push(newClockIn);
    setClockInRow(row);
  };

  console.log(clockInRow);

  const handleChange = (value) => {
    setSelectedName(value);
  };

  const onChangeTime = (time) => {
    setTime(time.valueOf());
  };

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
          {data?.map((emp, key) => (
            <Option key={key} value={emp.name}>
              {emp.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="body-actions">
        <p style={{ textAlign: "center", marginTop: "6px", color: "red" }}>
          {moment().format(format)}
        </p>
        <p>{`Turni ka filluar në orën ${moment(time).format("HH:mm")}!`}</p>
        <div className="clock-button">
          <Button
            type="primary"
            danger
            style={{ borderRadius: 8, width: 170, height: 30 }}
            onClick={handleSubmit}
          >
            Fillo Turnin
          </Button>
          <TimePicker
            defaultValue={time}
            onChange={onChangeTime}
            format={format}
            style={{ width: 90 }}
          />
        </div>
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
