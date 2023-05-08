import "./ProductList.css";

const ProductList = (props) => {
  const products = Array.from({ length: 110 }, (_, i) => (
    <div className="product" key={i}>
      <div className="productImage">
        <div className="userProfilePicture">
          <img src="" />
        </div>
      </div>
      <div className="productName">MacBook</div>
      <div className="productPrice">$1000.00</div>
    </div>
  ));
  return <div className={(props.item[0], props.item[1])}>{products}</div>;
};

export default ProductList;
