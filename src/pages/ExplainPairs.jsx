import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExplainPairs() {
  const nav = useNavigate();
  return (
    <div className="page explain-page">
      <main className="explain-card">
        <h2 className="adv-title">Parejas</h2>
        <p className="adv-sub">Encuentra todas las parejas volteando de a una carta por turno.</p>
        <ul className="explain-list">
          <li>Voltea dos cartas. Si coinciden, se quedan descubiertas.</li>
          <li>Si no coinciden, se vuelven a tapar.</li>
          <li>Resuelve todas las parejas antes de que el tiempo termine.</li>
        </ul>
        <div className="explain-actions">
          <button className="primaryBtn primaryBtn--lg primaryBtn--danger" onClick={() => nav('/main')}>Salir</button>
          <button className="primaryBtn primaryBtn--lg" onClick={() => nav('/pairs')}>Comenzar</button>
        </div>
      </main>
    </div>
  );
}
