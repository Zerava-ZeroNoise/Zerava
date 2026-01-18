import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import "./App.css";

// Initialize dark theme by default
if (!document.documentElement.getAttribute('data-theme')) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
