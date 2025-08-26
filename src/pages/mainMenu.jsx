// src/pages/MainMenu.jsx
import React from "react";
import Header from "../components/Header.jsx";

export default function MainMenu() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="page">
      <Header />

      <main className="mm-card">
        <section className="mm-hello">
          <h2>Hola, [nombre]</h2>
          <p>¿Qué harás hoy?</p>
        </section>

        <section className="mm-profile">
          <img className="mm-avatar" src={base + "img/person.png"} alt="Foto de perfil" />
          <div className="mm-metrics">
            <div className="mm-row">
              <img src={base + "img/streakIcon.png"} alt="Racha" />
              <div className="mm-num">Racha 3 días</div>
            </div>
            <div className="mm-row">
              <img src={base + "img/starIcon.png"} alt="Puntos" />
              <div className="mm-num">250 puntos</div>
            </div>
          </div>
        </section>

        <section className="mm-actions">
          <a className="mm-btn mm-btn--play" href={base + "game.html"}>
            <div className="mm-ico">♪</div>
            <span>Jugar</span>
          </a>
          <a className="mm-btn mm-btn--tips" href={base + "advice.html"}>
            <div className="mm-ico">i</div>
            <span>Consejos</span>
          </a>
        </section>
      </main>
    </div>
  );
}
