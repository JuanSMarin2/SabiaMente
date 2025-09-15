import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useStore } from "../store"; // Añadir esta importación

export default function MainMenu() {
  const img = (p) => import.meta.env.BASE_URL + "img/" + p;
  const { getUserName, streak, points } = useStore(); // Usar el store

  return (
    <div className="page">
      <Header />

      <main className="mm-card">
        <section className="mm-hello">
          <h2>Hola, {getUserName()}</h2> {/* Usar el nombre del store */}
          <p>¿Qué harás hoy?</p>
        </section>

        <section className="mm-profile">
          <img className="mm-avatar" src={img("person.png")} alt="" />
          <div className="mm-metrics">
            <div className="mm-row">
              <img src={img("streakIcon.png")} alt=""/>
              <div className="mm-num">Racha {streak} días</div> {/* Usar del store */}
            </div>
            <div className="mm-row">
              <img src={img("starIcon.png")} alt=""/>
              <div className="mm-num">{points} puntos</div> {/* Usar del store */}
            </div>
          </div>
        </section>

        <section className="mm-actions">
          <Link className="mm-btn mm-btn--play" to="/game">
            <div className="mm-ico">♪</div>
            <span>Jugar</span>
          </Link>
          <Link className="mm-btn mm-btn--tips" to="/advice">
            <div className="mm-ico">i</div>
            <span>Consejos</span>
          </Link>
        </section>
      </main>
    </div>
  );
}