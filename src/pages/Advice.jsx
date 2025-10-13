import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Advice(){
  const nav = useNavigate();
  const base = import.meta.env.BASE_URL + "img/";
  return (
    <div className="page adv-page">
      <Header />

      <main className="adv-card adv-advice">
        <h2 className="adv-title">Consejos</h2>

        <div className="advice-grid">
          <div className="advice-card">
            <img src={base + "advice1.png"} alt="Consejo 1" />
          </div>
          <div className="advice-card">
            <img src={base + "advice2.png"} alt="Consejo 2" />
          </div>
        </div>

        <div className="advice-video">
          <div className="video-wrap">
            <div className="play-overlay">▶</div>
            <video controls playsInline preload="metadata" poster={base + "advice1.png"}>
              <source src={base + "video.mp4"} type="video/mp4" />
              Tu navegador no soporta video.
            </video>
          </div>
        </div>

        <button className="primaryBtn adv-btn" onClick={()=>nav("/main")}>
          Continuar
        </button>
      </main>
    </div>
  );
}
