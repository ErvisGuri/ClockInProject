import React, { createContext, useState, useEffect } from 'react';
import Employees from './DataFake';

const ClockInContext = createContext();

const initials = Employees.people;

export function ClockInProvider({ children }) {
    const [clockInRow, setClockInRow] = useState(initials);
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
                clockInValue: [clockInRow, setClockInRow],
                timeValue: [time, setTime]
            }}
        >
            {children}
        </ClockInContext.Provider>
    )
}

export default ClockInContext