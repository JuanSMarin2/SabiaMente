import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const nav = useNavigate();
 
  const img = (p) => import.meta.env.BASE_URL + "img/" + p;

  return (
    <div className="page">
      <main className="card" style={{ maxWidth: 360, textAlign: "center" }}>
        <h1 style={{ fontSize: 24, marginBottom: 18 }}>¿Qué es SabiaMente?</h1>
        <p style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 32 }}>
          SabiaMente es una aplicación pensada para ayudarte a mantener tu mente
          activa y saludable mediante juegos sencillos, consejos útiles y hábitos
          que mejoran tu calidad de vida.
        </p>
        <img
          src={img("version.png")}
          alt="Versión"
          style={{ width: 56, marginBottom: 8 }}
        />
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Versión de la App</div>
        <div>V0.1.0</div>

        <div style={{ marginTop: 18 }}>
          <button className="btn outline" onClick={() => nav('/')}>Volver</button>
        </div>
      </main>
    </div>
  );
}
