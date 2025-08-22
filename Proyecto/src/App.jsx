import React from "react";

export default function App() {
  const goLogin = () => {
    window.location.href = "/login.html";
  };

  return (
    <div className="page">
      <main className="card">
        <img
          src="/img/logo.png"
          alt="SabiaMente Logo"
          className="logo"
          draggable="false"
        />
        <h1 className="title">SabiaMente</h1>
        <p className="subtitle">
          Entrena tu mente
          <br />
          Cuida tu vida
        </p>

        <button className="primaryBtn" onClick={goLogin}>
          Comenzar
        </button>
      </main>

      {/* Botón flotante "i" (abajo-izquierda) */}
      <a className="fab" href="/about.html" aria-label="Acerca de">
        i
      </a>
    </div>
  );
}
