// src/pages/MainMenu.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../store";

export default function MainMenu() {
  const img = (p) => import.meta.env.BASE_URL + "img/" + p;
  const { getUserName, streak, points } = useStore();

  const navigate = useNavigate();

  const startRandomGame = () => {
    // 50/50: explicación de Parejas o Ritmo
    const pick = Math.random() < 0.5 ? "/explain-pairs" : "/explain-rhythm";
    navigate(pick);
  };

  return (
    <div className="page">
      <main className="mm-card">
        <section className="mm-hello">
          <h2>Hola, {getUserName()}</h2>
          <p>¿Qué harás hoy?</p>
        </section>

        <section className="mm-profile">
          <img className="mm-avatar" src={img("person.png")} alt="" />
          <div className="mm-metrics">
            <div className="mm-row">
              <img src={img("streakIcon.png")} alt="" />
              <div className="mm-num">Racha {streak} días</div>
            </div>
            <div className="mm-row">
              <img src={img("starIcon.png")} alt="" />
              <div className="mm-num">{points} puntos</div>
            </div>
          </div>
        </section>

        <section className="mm-actions">
          <button className="mm-btn mm-btn--play" onClick={startRandomGame}>
            <div className="mm-ico">♪</div>
            <span>Jugar</span>
          </button>

          <Link className="mm-btn mm-btn--tips" to="/advice">
            <div className="mm-ico">i</div>
            <span>Consejos</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
