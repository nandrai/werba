import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./CurveGraph.css";

const data = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      label: "Dataset 1",
      data: [23, 30, -12, 16, 8],
      barThickness: 10,
      backgroundColor: "#4717ca",
      borderColor: "#4717ca",
      tension: 0.4,
    },
    {
      label: "Dataset 2",
      data: [-30, -5, 17, 29, 22],
      borderColor: "#fab907",
      barThickness: 10,
      backgroundColor: "#fab907",
      tension: 0.4,
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
          stepSize: 30,
        },
        grid: {
          color: "#fafafa",
        },
      },
    },
  },
};

const CurveGraph = () => {
  const [userData, setUserData] = useState({
    labels: data.labels,
    datasets: data.datasets,
  });
  return (
    <div className="g graphLineBox graphLineSmall">
      <h3 className="graphLineHeading">Order Size</h3>
      <Line
        height={"200%"}
        className="graphLineplot"
        data={userData}
        options={option.options}
      />
    </div>
  );
};

export default CurveGraph;
