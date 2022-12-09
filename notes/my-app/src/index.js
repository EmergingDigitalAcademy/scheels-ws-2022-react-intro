import React from "react";
import ReactDOM from "react-dom/client";
import "./static/00-index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Why is the commented out?
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
