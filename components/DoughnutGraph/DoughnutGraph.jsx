import "./DoughnutGraph.css";

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["Database1", "Database2", "Database3"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#f22c05", "#fdb60c", "#4717ca"],
      hoverBackgroundColor: ["#f22c05", "#fdb60c", "#4717ca"],
    },
  ],
};

const option = {
  cutoutPercentage: 80,
  borderWidth: 1,
  borderColor: "#fff",
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DoughnutGraph = () => {
  const [userData, setUserData] = useState({
    labels: data.labels,
    datasets: data.datasets,
  });
  return (
    <div>
      <Doughnut className="doughnutGraph" data={userData} options={option} />
    </div>
  );
};

export default DoughnutGraph;
