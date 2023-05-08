import "./Background.css";
import logo from "../src/assets/Logo.png";
import NonGraphSection from "./NonGraphSection.jsx";
import GraphSection from "./GraphSection.jsx";

const Background = () => {
  return (
    <div className="backgroundBox">
      <nav className="navbar">
        <img id="navbarLogo" src={logo} alt="Werabl Logo" />
        <div className="userProfilePicture"></div>
      </nav>
      <div className="backgroundBody">
        <NonGraphSection />
        <GraphSection />
      </div>
    </div>
  );
};

export default Background;
