import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Advice(){
  const nav = useNavigate();
  return (
    <div className="page">
      <Header />

      <main className="adv-card">
        <h2 className="adv-title">¡Felicitaciones!</h2>
        <p className="adv-sub">¡Aumentaste tu racha!</p>

        <div className="adv-row">
          <div className="adv-badge adv-green">1</div>
          <div className="adv-arrow">→</div>
          <div className="adv-badge adv-green">2</div>
        </div>

        <button className="primaryBtn adv-btn" onClick={()=>nav("/main")}>
          Continuar
        </button>
      </main>
    </div>
  );
}
