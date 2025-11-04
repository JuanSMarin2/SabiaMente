import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExplainRhythm() {
  const nav = useNavigate();
  return (
    <div className="page explain-page">
      <main className="explain-card">
        <h2 className="adv-title">Ritmo</h2>
        <p className="adv-sub">Observa la secuencia de colores y repítela en el mismo orden.</p>
        <ul className="explain-list">
          <li>Cada ronda agrega un color más a la secuencia.</li>
          <li>Escucha y mira con atención; pulsa los colores en el orden correcto.</li>
          <li>Si te equivocas, se repetirá la secuencia para que lo intentes de nuevo.</li>
        </ul>
        <div className="explain-actions">
          <button className="primaryBtn primaryBtn--lg primaryBtn--danger" onClick={() => nav('/main')}>Salir</button>
          <button className="primaryBtn primaryBtn--lg" onClick={() => nav('/rhythm')}>Comenzar</button>
        </div>
      </main>
    </div>
  );
}
