import "./PolarArea.css";

import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const data = {
  labels: ["Dataset1", ""],
  datasets: [
    {
      label: "My Dataset",
      data: [54, 27],
      backgroundColor: ["#4717ca", "#fdb60c"],
      borderColor: "white",
      borderWidth: 3,
      radius: 55,
    },
  ],
};
data.labels[0] = data.datasets[0].data[0] + "%";
const data2 = {
  labels: ["Dataset1", ""],
  datasets: [
    {
      label: "My Dataset",
      data: [23, 100],
      backgroundColor: ["#f22c05", "#fdb60c"],
      borderColor: "white",
      borderWidth: 3,
      radius: 35,
    },
  ],
};
data2.labels[0] = data2.datasets[0].data[0] + "%";

const options = {
  scale: {
    y: {
      ticks: {
        beginAtZero: false,
      },
    },
  },
  layout: {
    padding: 30,
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

const PolarChart = () => {
  return (
    <div className="piechart">
      <Pie data={data} options={options} />
      <Pie data={data2} options={options} />
    </div>
  );
};
export default PolarChart;
