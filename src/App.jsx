// import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Background from "../components/Background";
import ProductPage from "../productPage/ProductPage";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Background /> },
  { path: "/addProducts", element: <ProductPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
