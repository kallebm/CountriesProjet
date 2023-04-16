import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CountriesProvider } from "./context/countries";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
