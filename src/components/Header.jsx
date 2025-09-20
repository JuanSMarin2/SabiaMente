// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../stores/themeStore";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="sb-theme" onClick={toggle} title="Cambiar tema">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default function Header() {
  const baseImg = (p) => import.meta.env.BASE_URL + "img/" + p;

  return (
    <div className="sb-appbar">
      <header className="sb-header">
        <Link className="sb-brand" to="/settings" aria-label="Ir al menú principal">
          <img className="sb-logo" src={baseImg("logo.png")} alt="SabiaMente" />
          <span className="sb-title">SabiaMente</span>
        </Link>

        <div className="sb-actions">
          <ThemeToggle />
          <Link className="sb-user" to= "/main"aria-label="Ajustes de usuario">
            <svg className="sb-user-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle
                cx="12"
                cy="8"
                r="3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M5 19c0-3.1 3.4-5 7-5s7 1.9 7 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </header>
    </div>
  );
}
