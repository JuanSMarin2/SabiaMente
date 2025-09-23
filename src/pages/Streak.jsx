// src/pages/Streak.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

export default function Streak() {
  const nav = useNavigate();
  const { incrementStreak, addPoints, streak } = useStore();
  const ran = useRef(false);

  useEffect(() => {
    // Evita doble ejecución en desarrollo (StrictMode)
    if (ran.current) return;
    ran.current = true;

    // +1 racha y +10 puntos al abrir esta pantalla
    incrementStreak();
    addPoints(10);
  }, [incrementStreak, addPoints]);

  // Después del incremento, streak ya es la racha actual
  const newStreak = streak ?? 0;
  const oldStreak = Math.max(0, newStreak - 1);

  return (
    <div className="page">
      <main className="adv-card">
        <h2 className="adv-title">¡Felicitaciones!</h2>
        <p className="adv-sub">¡Aumentaste tu racha!</p>

        <div className="adv-row">
          <div className="adv-badge adv-green">{oldStreak}</div>
          <div className="adv-arrow">→</div>
          <div className="adv-badge adv-green">{newStreak}</div>
        </div>

        <div style={{ marginTop: 12 }}>
          <div className="mm-row" style={{ justifyContent: "center" }}>
            <img
              src={import.meta.env.BASE_URL + "img/starIcon.png"}
              alt=""
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <div className="mm-num">Ganaste 10 puntos</div>
          </div>
        </div>

        <button className="primaryBtn adv-btn" onClick={() => nav("/main")}>
          Continuar
        </button>
      </main>
    </div>
  );
}
