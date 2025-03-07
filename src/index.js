import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot from "react-dom/client"
import CsvUploader from "./CsvUploader"; // ✅ Ensure correct import path

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot
root.render(
  <React.StrictMode>
    <CsvUploader />
  </React.StrictMode>
);
