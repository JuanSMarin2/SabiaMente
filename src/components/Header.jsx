// src/components/Header.jsx
import React from "react";

export default function Header() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="sb-appbar">
      <header className="sb-header">
        <a className="sb-brand" href={base + "mainMenu.html"} aria-label="Ir al menú principal">
          <img className="sb-logo" src={base + "img/logo.png"} alt="SabiaMente" draggable="false" />
          <span className="sb-title">SabiaMente</span>
        </a>

        <a className="sb-user" href={base + "userSettings.html"} aria-label="Ir a ajustes de usuario">
          <svg className="sb-user-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M5 19c0-3.1 3.4-5 7-5s7 1.9 7 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </a>
      </header>
    </div>
  );
}
