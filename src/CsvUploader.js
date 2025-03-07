import React, { useState } from "react";
import Papa from "papaparse";
import "./CsvUploader.css"; // Import the CSS file

const CsvUploader = () => {
  const [tableData, setTableData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        const [headerRow, ...dataRows] = result.data;
        setHeaders(headerRow);
        setTableData(dataRows);
      },
      skipEmptyLines: true,
    });
  };

  return (
    <div className="container">
      <h2>CSV to HTML Table</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvUploader;
