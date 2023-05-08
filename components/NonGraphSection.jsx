import "./NonGraphSection.css";
import ProductList from "./ProductList/ProductList";

const NonGraphSection = () => {
  return (
    <div className="leftSidebar">
      <button className="nonGraph btn btnVPR">View Pricing Report</button>

      <div className="nonGraph divLogoBtn">
        <div className="userProfilePicture"></div>
        <button className="btnPPTS btn btnRadi">Push Product to Shopify</button>
        <div className="userProfilePicture green"></div>
      </div>

      <ProductList item={["nonGraph", "productList"]} />

      <div className="nonGraph btnCSV-EPD">
        <button className="btnCSV btn">Upload CSV</button>
        <button className="btnEPD btn">Enter Product Description</button>
      </div>
    </div>
  );
};

export default NonGraphSection;
