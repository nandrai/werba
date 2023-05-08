import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "Dataset 1",
      data: [6500, 5900, 800, 8100, 5600, 5500, 4000, 5500, 3000, 2000],
      barThickness: 10,
      backgroundColor: "#f22c05",
    },
    {
      label: "Dataset 2",
      data: [2800, 4800, 400, 5500, 3000, 2000, 1900, 8600, 2700, 9000],
      barThickness: 10,
      backgroundColor: "#fdb60c",
    },
  ],
};

const option = {
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          stepSize: 5000,
        },
        grid: {
          color: "#fafafa",
        },
      },
    },
  },
};

const StackedGraph = () => {
  const [userData, setUserData] = useState({
    labels: data.labels,
    datasets: data.datasets,
  });
  return (
    <Bar className="stackedGraph" data={userData} options={option.options} />
  );
};

export default StackedGraph;
