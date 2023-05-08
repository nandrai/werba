import "./BarChartHorizontal.css";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["23", "100", "67"],
  datasets: [
    {
      data: [23, 100, 67],
      backgroundColor: ["#f22c05", "#fdb60c", "#4717ca"],
      hoverBackgroundColor: ["#f22c05", "#fdb60c", "#4717ca"],
      barThickness: 12,
    },
  ],
};

data.labels = data.datasets[0].data.map((e) => {
  return e + "%";
});

const option = {
  indexAxis: "y",
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

const BarChartHorizontal = () => {
  const [userData, setUserData] = useState({
    labels: data.labels,
    datasets: data.datasets,
  });
  return (
    <div>
      <Bar className="BarChartHorizontal" data={userData} options={option} />
    </div>
  );
};

export default BarChartHorizontal;
