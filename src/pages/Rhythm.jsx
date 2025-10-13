import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Colors / IDs used by the rhythm game
const COLORS = ["red", "green", "cyan"];

const soundBase = import.meta.env.BASE_URL + "img/";

function useAudio(src) {
  const audioRef = useRef(null);
  useEffect(() => {
    const a = new Audio(src);
    // if the specific sound fails to load, fall back to a generic sound.wav
    a.addEventListener("error", () => {
      const fallback = soundBase + "sound.wav";
      if (a.src.indexOf("sound.wav") === -1) {
        a.src = fallback;
      }
    });
    audioRef.current = a;
  }, [src]);
  const play = () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.currentTime = 0;
      // play returns a promise in modern browsers
      audioRef.current.play().catch(() => {
        // ignore autoplay policy / play errors; user interactions will play
      });
    } catch (e) {
      // ignore
    }
  };
  return play;
}

export default function Rhythm() {
  const nav = useNavigate();
  const [sequence, setSequence] = useState([]); // sequence of indices
  const [playing, setPlaying] = useState(false);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [highlight, setHighlight] = useState(null);

  const good = useAudio(soundBase + "goodSound.wav");
  const bad = useAudio(soundBase + "badSound.wav");
  const sequenceSound = useAudio(soundBase + "sequence.wav");

  const timeoutRef = useRef(null);

  useEffect(() => {
    // Start the game after 1s with an initial random sequence
    timeoutRef.current = setTimeout(() => startNewRound(), 1000);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startNewRound = () => {
    setSequence((prev) => {
      const next = prev.concat(Math.floor(Math.random() * COLORS.length));
      // play the sequence
      playSequence(next);
      return next;
    });
  }; 
 
  const playSequence = async (seq) => {
    setLocked(true);
    setPlaying(true);
    for (let i = 0; i < seq.length; i++) {
      const id = seq[i];
      setHighlight(id);
      good();
      // show highlight for 600ms
      // eslint-disable-next-line no-await-in-loop
      await new Promise((res) => setTimeout(res, 600));
      setHighlight(null);
      // pause between items
      // eslint-disable-next-line no-await-in-loop
      await new Promise((res) => setTimeout(res, 220));
    }
    setLocked(false);
    setPlaying(false);
    setPlayerIndex(0);
  };

  const onPlayerClick = (id) => {
    if (locked) return;
    // highlight briefly
    setHighlight(id);
    if (sequence[playerIndex] === id) {
      // correct
      good();
      const nextIndex = playerIndex + 1;
      setPlayerIndex(nextIndex);
      if (nextIndex === sequence.length) {
        // Completed sequence correctly -> play sequence-complete sound,
        // wait 500ms and either start next round or finish the game after 5 rounds.
        sequenceSound();
        const rounds = sequence.length; // current rounds completed
        setLocked(true);
        setTimeout(() => {
          setLocked(false);
          if (rounds >= 5) {
            // finished game
            nav("/streak");
          } else {
            startNewRound();
          }
        }, 500);
      }
      setTimeout(() => setHighlight(null), 160);
    } else {
      // incorrect
      bad();
      // replay entire sequence after short delay
      setLocked(true);
      setTimeout(() => playSequence(sequence), 700);
    }
  };

  return (
    <div className="page">
      <main className="rhythm-card">
        <h2 className="adv-title">Ritmo</h2>
        <p className="adv-sub">Repite la secuencia</p>

        <div className="rhythm-board">
          {COLORS.map((c, i) => (
            <button
              key={c}
              className={["rhythm-pad", c, highlight === i ? "on" : ""].join(" ")}
              onClick={() => onPlayerClick(i)}
              aria-label={c}
            />
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <button className="primaryBtn" onClick={() => nav('/main')}>Volver</button>
        </div>
      </main>
    </div>
  );
}
