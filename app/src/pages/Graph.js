import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import styles from "../pages/Graph.module.css";
const Graph = () => {
  const data = [
    { name: "Jan", x: 120, y: 230, z: 122 },
    { name: "Feb", x: 220, y: 30, z: 73 },
    { name: "Mar", x: 130, y: 150, z: 32 },
    { name: "Apr", x: 440, y: 350, z: 23 },
    { name: "May", x: 350, y: 450, z: 20 },
    { name: "Jun", x: 620, y: 250, z: 29 },
    { name: "Week", x: 370, y: 170, z: 61 },
    { name: "Q1", x: 280, y: 320, z: 45 },
    { name: "Q2", x: 190, y: 430, z: 93 },
    { name: "Q3", x: 110, y: 230, z: 122 },
    { name: "Q4", x: 210, y: 30, z: 73 },
    { name: "Year", x: 130, y: 150, z: 32 },
  ];

  const [timePeriodOptions, setTimePeriodOptions] = useState({
    month: true,
    week: false,
    year: false,
  });

  // Separate datasets for weeks, months, and years
  const weekData = data.filter((item) => item.name === "Week");
  const monthData = data.filter((item) => item.name.length === 3);
  const yearData = data.filter((item) => item.name === "Year");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTimePeriodOptions((prevState) => ({
      ...prevState, 
      [name]: checked,
    }));
  };

  let filteredData;
  if (timePeriodOptions.week) {
    filteredData = weekData;
  } else if (timePeriodOptions.month) {
    filteredData = monthData;
  } else if (timePeriodOptions.year) {
    filteredData = yearData;
  }

  return (
    <div className={styles.graph}>
      <BarChart
        className={styles.bargraph}
        width={700}
        height={300}
        padding={5}
        data={filteredData}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar barSize={10} dataKey="x" stackId="a" fill="#44c898" />
        <Bar barSize={10} dataKey="y" stackId="a" fill="#f1b44c" />
        <Bar barSize={10} dataKey="z" stackId="a" fill="#556ee6" />
      </BarChart>
      <div className={styles.chechbox}>
        <label>
          <input
            type="checkbox"
            name="month"
            checked={timePeriodOptions.month}
            onChange={handleCheckboxChange}
          />
          Month
        </label>
        <label>
          <input
            type="checkbox"
            name="week"
            checked={timePeriodOptions.week}
            onChange={handleCheckboxChange}
          />
          Week
        </label>
        <label>
          <input
            type="checkbox"
            name="year"
            checked={timePeriodOptions.year}
            onChange={handleCheckboxChange}
          />
          Year
        </label>
      </div>
    </div>
  );
};

export default Graph;
