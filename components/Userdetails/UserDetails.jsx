import "./UserDetails.css";

const UserDetails = () => {
  return (
    <div className="g UserCard">
      <div className="items">
        <p>Company Name</p>
        <b>XYZ Clothing</b>
      </div>
      <div className="items">
        <p>Subscription Plan</p>
        <b>Shopify</b>
      </div>
      <div className="items">
        <p>Users</p>
        <b>5</b>
      </div>
      <div className="items">
        <p>Product Uploaded</p>
        <b>500</b>
      </div>
      <div className="items">
        <p>Current Products</p>
        <b>200</b>
      </div>
      <div className="items">
        <p>Shpoify Connected</p>
        <b>Yes</b>
      </div>
    </div>
  );
};

export default UserDetails;
