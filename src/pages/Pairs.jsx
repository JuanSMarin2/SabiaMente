import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// 6 parejas -> 12 cartas
const EMOJIS = ["🍎", "🍌", "🍇", "🍊", "🍓", "🍐"];

const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default function Pairs() {
  const navigate = useNavigate();

  const [deck, setDeck] = useState([]);              // [{id, value}]
  const [flipped, setFlipped] = useState([]);        // [idx, idx]
  const [matched, setMatched] = useState(new Set()); // índices resueltos
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [locked, setLocked] = useState(false);

  const totalPairs = useMemo(() => EMOJIS.length, []);

  // helper: segundos -> mm:ss
  const mmss = (s) => {
    const m = Math.floor(s / 60).toString();     // 0-9 está bien con 1 dígito
    const r = (s % 60).toString().padStart(2, "0");
    return `${m}:${r}`;
  };

  // Setup / reset
  const resetGame = () => {
    const values = shuffle([...EMOJIS, ...EMOJIS]);
    setDeck(values.map((v, i) => ({ id: i, value: v })));
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setTimeLeft(5 * 60);
    setLocked(false);
  };
  useEffect(() => { resetGame(); }, []);

  // Quita el padding-top global del layout mientras estamos en Pairs para que
  // el header del minijuego quede pegado arriba del todo sin espacio vacío.
  useEffect(() => {
    document.body.classList.add('no-global-appbar-gap');
    return () => document.body.classList.remove('no-global-appbar-gap');
  }, []);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);

  // Win condition
  useEffect(() => {
    const solvedPairs = matched.size / 2;
    if (solvedPairs === totalPairs && totalPairs > 0) {
      setTimeout(() => navigate("/streak", { replace: true }), 650);
    }
  }, [matched, totalPairs, navigate]);

  const onFlip = (idx) => {
    if (locked || matched.has(idx) || flipped.includes(idx) || timeLeft === 0) return;
    const next = [...flipped, idx];
    setFlipped(next);

    if (next.length === 2) {
      setLocked(true);
      setMoves((m) => m + 1);
      const [a, b] = next;
      const isMatch = deck[a].value === deck[b].value;

      setTimeout(() => {
        if (isMatch) {
          const mset = new Set(matched);
          mset.add(a); mset.add(b);
          setMatched(mset);
        }
        setFlipped([]);
        setLocked(false);
      }, isMatch ? 420 : 650);
    }
  };

  return (
    <div className="pairs-page min-h-dvh w-full flex flex-col items-center bg-[#f5f7fb] text-slate-900 dark:bg-[#181f2e] dark:text-slate-100">
      {/* APP BAR propia (barra sólida a todo lo ancho, sin botón volver) */}
      <div className="pairs-appbar">
        <div className="pairs-appbar-inner">
          <div className="font-semibold text-[18px]">Parejas</div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full time-chip">🕒</span>
            <span className="text-2xl font-bold tabular-nums">{mmss(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* TABLERO 3x4 con más separación */}
      <div className="pairs-board w-full max-w-[380px] px-5 pb-8">
        <div className="pairs-grid grid grid-cols-3 md:grid-cols-4 gap-6 mt-1">
          {deck.map((card, idx) => {
            const opened = flipped.includes(idx) || matched.has(idx);
            const blocked = opened || locked || timeLeft === 0;
            return (
              <button
                key={card.id}
                onClick={() => onFlip(idx)}
                className={[
                  "pair-card rounded-[18px] border shadow-lg",
                  "transition-transform active:translate-y-px select-none",
                  "flex items-center justify-center will-change-transform",
                  opened
                    ? "bg-white text-slate-900 border-black/20 shadow-[0_8px_18px_rgba(2,6,23,0.10)]"
                    : "bg-[#1f3a8a] text-white border-black/30 shadow-[0_8px_18px_rgba(2,6,23,0.20)]",
                  blocked ? "pointer-events-none" : "cursor-pointer",
                ].join(" ")}
                aria-label={opened ? card.value : "Carta tapada"}
              >
                {opened && (
                  <span className="pairs-emoji drop-shadow-none filter-none">
                    {card.value}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Acciones inferiores */}
        <p className="mt-4 text-center text-sm text-slate-600">
          Pares resueltos: <b>{matched.size / 2}</b> / {totalPairs} · Movs: <b>{moves}</b>
        </p>

        {/* Botón Volver (estilo igual al de Rhythm) */}
        <div style={{ marginTop: 12 }} className="flex justify-center">
          <button className="primaryBtn" onClick={() => navigate('/main')}>Volver</button>
        </div>
      </div>
    </div>
  );
}
