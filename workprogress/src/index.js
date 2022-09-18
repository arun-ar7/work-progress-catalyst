import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { ValueProvider } from "./context/ValueContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ValueProvider>
    <App />
  </ValueProvider>
);
