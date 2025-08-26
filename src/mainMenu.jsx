// src/mainMenu.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import MainMenu from "./pages/mainMenu.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainMenu />
  </React.StrictMode>
);
