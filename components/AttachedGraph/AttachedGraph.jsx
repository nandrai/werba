import "./AttachedGraph.css";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["23", "100", "67"],
  datasets: [
    {
      data: [23, 100, 67],
      backgroundColor: ["#f22c05", "#fdb60c", "#6cb4fc"],
      barThickness: 12,
    },
  ],
};

const option = {
  indexAxis: "x",
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
      },
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
  },
};

const AttachedGraph = ({ width, height }) => {
  const [userData, setUserData] = useState({
    labels: data.labels,
    datasets: data.datasets,
  });
  return (
    <Bar
      className="BarChartHorizontal"
      data={userData}
      options={option}
      style={{ height: height, width: width }}
      //   height={"170px"}
      //   width={"120px"}
    />
  );
};

export default AttachedGraph;
