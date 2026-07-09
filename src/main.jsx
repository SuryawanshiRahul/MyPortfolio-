import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

import "./index.css";

import "./assets/css/variables.css";
import "./assets/css/global.css";
import "./assets/css/sidebar.css";
import "./assets/css/navbar.css";
import "./assets/css/about.css";
import "./assets/css/resume.css";
import "./assets/css/portfolio.css";
import "./assets/css/contact.css";
import "./assets/css/footer.css";
import "./assets/css/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);