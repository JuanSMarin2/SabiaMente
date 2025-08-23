import React from "react";

export default function App() {
  const goLogin = () => {
    window.location.href = import.meta.env.BASE_URL + "login.html";
  };

  return (
    <div className="page">
      <main className="card">
        <img
          src={import.meta.env.BASE_URL + "img/logo.png"}
          alt="SabiaMente Logo"
          className="logo"
          draggable="false"
        />
        <h1 className="title"></h1>
        <p className="subtitle">
          Entrena tu mente
          <br />
          Cuida tu vida
        </p>

        <button className="primaryBtn" onClick={goLogin}>
          Comenzar
        </button>
      </main>

      <a
        className="fab"
        href={import.meta.env.BASE_URL + "about.html"}
        aria-label="Acerca de"
      >
        i
      </a>
    </div>
  );
}
