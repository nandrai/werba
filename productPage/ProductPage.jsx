import "./ProductPage.css";
import { CssBaseline, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomCheckbox = styled(TextField)(() => ({
  margin: "1rem 1rem",
  borderRadius: ".3rem",
}));

const ProductPage = () => {
  const [inputBoxesCount, setInputBoxesCount] = useState(0);

  const uploadAll = () => {
    // You can add your API logic here
  };
  const addInputBoxes = () => {
    setInputBoxesCount(inputBoxesCount + 1);
  };

  const renderInputBoxes = () => {
    const arr = [];
    for (let i = 0; i < inputBoxesCount; i++) {
      arr.push(
        <div key={i} className="productInputs">
          <h2 className="productHeading">Please fill the Fields for Product</h2>
          <CustomCheckbox
            id="handleInput"
            label="Handle"
            variant="standard"
            required={true}
          />
          <CustomCheckbox
            id="titleInput"
            label="Title"
            variant="standard"
            required={true}
          />
          <CustomCheckbox
            id="priceInput"
            label="Price"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="imageInput"
            label="Product Image Link"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="imageInput"
            label="Product Image Link 2"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="imageInput"
            label="Product Image Link 3"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="imageInput"
            label="Product Image Link 4"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="imageInput"
            label="Product Image Link 4"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="vendor"
            label="Vendor"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="published"
            label="Published"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="varientIQ"
            label="Variant Inventory Quantity"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="varientIP"
            label="Variant Inventory Policy"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="varientFS"
            label="Variant Fulfillment Service"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="varientP"
            label="Variant Price"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="varientRS"
            label="Variant Requires Shipping"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="varientT"
            label="Variant Taxable"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="varientG"
            label="Variant Grams"
            variant="standard"
            required={false}
          />
          <CustomCheckbox
            className="varientWU"
            label="Variant Weight Unit"
            variant="standard"
            required={false}
          />
        </div>
      );
      console.log(arr);
    }
    return arr;
  };

  return (
    <div className="box">
      <CssBaseline />
      <div className="boxHeader"></div>
      <div className="boxBody">
        <div className="btnBox">
          <Button variant="contained" onClick={addInputBoxes} className="btn">
            Add Product
          </Button>
          <Button variant="contained" onClick={uploadAll} className="btn">
            Upload All
          </Button>
        </div>
        <div className="line"></div>
        <div className="addedProductList">{renderInputBoxes()}</div>
      </div>
    </div>
  );
};

export default ProductPage;
