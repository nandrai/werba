import React, { useEffect } from "react";
import "./ProductPage.css";
import { CssBaseline, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomCheckbox = styled(TextField)(() => ({
  margin: "1rem 1rem",
  borderRadius: ".3rem",
}));

const ProductPage = () => {
  const [inputBoxes, setInputBoxes] = useState(1);

  const addInputBoxes = () => {
    setInputBoxes(inputBoxes + 1);
  };

  const renderInputBoxes = () => {
    const arr = [];
    for (let i = 0; i < inputBoxes; i++) {
      arr.push(
        <div key={i} className="productInputs">
          <h2 className="productHeading">Please fill the Fields</h2>
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
          <Button variant="contained" className="btn">
            Upload All
          </Button>
        </div>
        <div className="line"></div>
        <div className="addedProductList">
          {/* Make the below fragment looped */}
          {renderInputBoxes()}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
