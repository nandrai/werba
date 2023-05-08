import "./LinePointerGraph.css";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      data: [30, 56, 39, 100, 67],
      backgroundColor: "#f22c05",
      borderColor: "#4717ca",
      borderWidth: 8,
      pointBackgroundColor: "yellow",
      pointRadius: 10,
    },
  ],
};

const option = {
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
      },
      grid: {
        color: "#fafafa",
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        color: "#fafafa",
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
  },
};

const LinePointGraph = () => {
  const [userData, setUserData] = useState({
    labels: data.labels,
    datasets: data.datasets,
  });
  return (
    <div>
      <Line className="BarChartHorizontal" data={userData} options={option} />
    </div>
  );
};

export default LinePointGraph;
