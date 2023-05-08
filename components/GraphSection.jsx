// import StackedBarChart from "./Charts/StackedBarChart.jsx";
import "./GraphSection.css";
import StackedGraph from "./Stackedgraph/StackedGraph";
import UserDetails from "./Userdetails/UserDetails";
import CurveGraph from "./CurveGraph/CurveGraph";
import DoughnutGraph from "./DoughnutGraph/DoughnutGraph";
import BarChartHorizontal from "./BarChartHorizontal/BarChartHorizontal";
import LinePointGraph from "./LinePointGarph/LinePointGraph";
import PolarChart from "./PolarChart/PolarChart";
import AttachedGraph from "./AttachedGraph/AttachedGraph";

const GraphSection = () => {
  return (
    <div className="rightSidebar">
      <div className="graphRows size40">
        <div className="g graphStackedBarChart">
          <h3>COMPANY SALES TRACKING</h3>
          <StackedGraph />
        </div>
        <div className="userDetails-graphCurved">
          <UserDetails />
          <div className="graphCurve">
            <CurveGraph />
          </div>
        </div>
      </div>
      <div className="graphRows size25">
        <div className="g graphDoughnutBox">
          <h3>SALES</h3>
          <DoughnutGraph />
        </div>
        <div className="g graphBarChartHorizontal">
          <BarChartHorizontal />
        </div>
        <div className=" g graphLinePointGraph">
          <h3>TRAFFIC</h3>
          <LinePointGraph />
        </div>
      </div>
      <div className="graphRows sp size25">
        <div className="g graphPolar">
          <h3>Gross Profit</h3>
          <PolarChart />
        </div>
        <div className="g graphBarchart-Doughnut">
          <div className="attachedBarGraph">
            <AttachedGraph height={"250px"} width={"120px"} />
          </div>
          <div className="g multiDoughnutGraph">
            <DoughnutGraph style={{ backgroundColor: "pink" }} />
          </div>
        </div>
        <div className="g graphBarChartHorizontal">
          <BarChartHorizontal />
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
