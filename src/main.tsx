import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === "development" ? "/" : "/story"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
