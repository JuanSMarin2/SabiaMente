import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
const baseImg = (p) => import.meta.env.BASE_URL + "img/" + p;

  return (
    <div className="page">
      <main className="card">
        <img src={baseImg("logo.png")} alt="SabiaMente Logo" className="logo" draggable="false" />
        <h1 className="title">SabiaMente</h1>
        <p className="subtitle">
          Entrena tu mente<br/>Cuida tu vida
        </p>

        <Link className="primaryBtn" to="/login">Comenzar</Link>
      </main>

      <Link className="fab" to="/about" aria-label="Acerca de">i</Link>
    </div>
  );
}
