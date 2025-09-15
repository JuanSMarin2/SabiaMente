import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store"; // Añadir importación

export default function Header() {
  const { toggleTheme, theme } = useStore();
  const img = (p) => import.meta.env.BASE_URL + "img/" + p; // Añadir esta línea
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="sb-appbar">
      <div className="sb-header">
        <Link className="sb-brand" to="/main">
          <img className="sb-logo" src={img("logo.png")} alt="SabiaMente" />
          <div className="sb-title">SabiaMente</div>
        </Link>
        
        <div className="sb-actions">
          <button className="sb-theme" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <Link className="sb-user" to="/profile" aria-label="Perfil">
            <svg className="sb-user-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}