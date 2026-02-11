import { useMemo, useState } from "react";
import Board from "./Board";
import TextArea from "./TextArea";
import InfoField from "./InfoField";
import { levels } from "./levels";
import type { CSSProperties } from "react";

type StyleMap = Record<string, string>;

const snippets = [
  "flex-direction: column;",
  "justify-content: center;",
  "justify-content: space-between;",
  "align-items: center;",
  "align-items: flex-end;",
  "gap: 20px;",
];

function cssToReactStyle(css: string): StyleMap {
  const style: StyleMap = {};

  css.split(";").forEach((rule) => {
    const [rawProp, rawValue] = rule.split(":");
    const prop = rawProp?.trim();
    const value = rawValue?.trim();

    if (!prop || !value) {
      return;
    }

    const camelProp = prop.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
    style[camelProp] = value;
  });

  return style;
}

function normalize(value: string | number | undefined): string {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export default function FlexBoxGame() {
  const [cssInput, setCssInput] = useState("");
  const [levelIndex, setLevelIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const currentLevel = levels[levelIndex];

  const parsedStyle = useMemo(() => cssToReactStyle(cssInput), [cssInput]);

  const liveStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      ...currentLevel.initialStyle,
      ...parsedStyle,
    }),
    [currentLevel, parsedStyle]
  );

  const targetStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      ...currentLevel.initialStyle,
      ...currentLevel.goal,
    }),
    [currentLevel]
  );

  const progress = Math.round(((levelIndex + 1) / levels.length) * 100);
  const easyCount = levels.filter((level) => level.difficulty === "Latwy").length;
  const mediumCount = levels.filter((level) => level.difficulty === "Sredni").length;
  const hardCount = levels.filter((level) => level.difficulty === "Trudny").length;

  const checkSolution = () => {
    const solved = Object.entries(currentLevel.goal).every(([prop, value]) => {
      const actualValue = parsedStyle[prop] ?? currentLevel.initialStyle[prop as keyof typeof currentLevel.initialStyle];
      return normalize(actualValue) === normalize(value);
    });

    if (!solved) {
      setStatus("error");
      return;
    }

    setStatus("success");
    window.setTimeout(() => {
      if (levelIndex === levels.length - 1) {
        setLevelIndex(0);
      } else {
        setLevelIndex((prev) => prev + 1);
      }
      setCssInput("");
      setStatus("idle");
    }, 900);
  };

  const resetLevel = () => {
    setCssInput("");
    setStatus("idle");
  };

  const goToPrev = () => {
    setLevelIndex((prev) => (prev === 0 ? levels.length - 1 : prev - 1));
    setCssInput("");
    setStatus("idle");
  };

  const goToNext = () => {
    setLevelIndex((prev) => (prev === levels.length - 1 ? 0 : prev + 1));
    setCssInput("");
    setStatus("idle");
  };

  const addSnippet = (snippet: string) => {
    setCssInput((prev) => (prev.trim().length === 0 ? snippet : `${prev}\n${snippet}`));
  };

  return (
    <div className="game-shell">
      <header className="hero">
        <div>
          <p className="hero__tag">Flexbox Dots Game</p>
          <h1>Playground Flexbox</h1>
          <p className="hero__subtitle">Układaj kolorowe kropki wpisując CSS i przechodź kolejne scenariusze.</p>
          <p className="hero__edu">Aplikacja w celach edukacyjnych CSS.</p>
        </div>
        <div className="progress-card" aria-label="Postep gry">
          <p>Poziom {currentLevel.id}</p>
          <strong>{currentLevel.title}</strong>
          <span>Trudnosc: {currentLevel.difficulty}</span>
          <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span>{progress}%</span>
          <p className="progress-meta">
            Poziomy: {levels.length} | Trudnosci: 3 ({easyCount}/{mediumCount}/{hardCount})
          </p>
        </div>
      </header>

      <main className="game-grid">
        <section className="challenge-card">
          <div className="challenge-card__header">
            <h2>Wyzwanie</h2>
            <div className="challenge-nav">
              <button onClick={goToPrev} type="button">Poprzedni</button>
              <button onClick={goToNext} type="button">Nastepny</button>
            </div>
          </div>
          <p className="challenge-card__task">{currentLevel.task}</p>
          <p className="challenge-card__hint">Hint: {currentLevel.hint}</p>

          <div className="boards-layout">
            <Board title="Twoj wynik" style={liveStyle} dotQty={currentLevel.dotQty} accent="live" />
            <Board title="Cel rundy" style={targetStyle} dotQty={currentLevel.dotQty} accent="target" />
          </div>
        </section>

        <section className="editor-card">
          <h2>Wpisz CSS</h2>
          <TextArea value={cssInput} onChange={setCssInput} />

          <div className="snippet-row">
            {snippets.map((snippet) => (
              <button key={snippet} type="button" onClick={() => addSnippet(snippet)}>
                {snippet}
              </button>
            ))}
          </div>

          <div className="actions">
            <button type="button" className="btn btn--ghost" onClick={resetLevel}>
              Reset
            </button>
            <button type="button" className="btn btn--primary" onClick={checkSolution}>
              Sprawdz
            </button>
          </div>

          <p className={`status status--${status}`}>
            {status === "idle" && "Wpisz style i sprawdz rezultat."}
            {status === "error" && "Jeszcze nie to. Porownaj z podgladem celu."}
            {status === "success" && "Perfekcyjnie! Za chwile kolejny poziom."}
          </p>
        </section>

        <InfoField />
      </main>

      <footer className="app-footer">© 2026 UI-kolo. Wszelkie prawa zastrzeżone.</footer>
    </div>
  );
}
