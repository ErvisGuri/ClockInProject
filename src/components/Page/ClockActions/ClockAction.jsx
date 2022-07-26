import React, { useEffect, useState } from "react";

import { Dropdown } from "antd";

import ScrollToBottom from "react-scroll-to-bottom";

import "antd/dist/antd.css";
import "../ClockActions/clockAction.css";

//Material UI
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Employee from "../../../DataFake";
import { Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { TimePicker } from "antd";
import moment from "moment";
const format = "HH:mm";

const initials = Employee.people;

const ClockAction = () => {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);
  const [clockInTime, setClockInTime] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [clockInRow, setClockInRow] = useState(initials);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 30000);
  }, []);

  const hours = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const handleSubmit = () => {
    const id = Math.floor(Math.random() * 1000);
    const newClockIn = {
      name: selectedName,
      time: hours,
      id: id,
    };
    setClockInRow(newClockIn);
  };

  console.log(clockInRow);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const data = Employee.people;

  const handleSelected = (e) => {
    console.log(setSelectedName(e.target.value));
  };

  const menu = (
    <ScrollToBottom className="popupScroll">
      <div className="popup">
        {data?.map((emp, key) => {
          return (
            <div key={key}>
              <p defaultValue={emp.name} onClick={handleSelected}>
                {emp.name}
              </p>
            </div>
          );
        })}
      </div>
    </ScrollToBottom>
  );

  return (
    <div className="actions_container">
      <div className="header-actions">
        <span>Veprime Turni</span>
        <Dropdown
          overlay={menu}
          onVisibleChange={handleVisibleChange}
          visible={visible}
        >
          <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Dropdown>
      </div>
      <div className="body-actions">
        <p style={{ textAlign: "center", marginTop: "6px", color: "red" }}>
          {hours}
        </p>
        <p>{`Turni ka filluar në orën ${hours}!`}</p>
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
            defaultValue={moment(hours?.toLocaleString(), format)}
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
