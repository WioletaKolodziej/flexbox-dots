import { useEffect, useMemo, useState } from "react";
import Board from "./Board";
import TextArea from "./TextArea";
import InfoField from "./InfoField";
import { levels } from "./levels";
import type { CSSProperties } from "react";
import { difficultyLabels, languageOptions, uiText, type Language } from "../i18n";

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

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") {
    return "pl";
  }

  const candidates = [navigator.language, ...(navigator.languages ?? [])]
    .map((entry) => entry.toLowerCase());

  if (candidates.some((entry) => entry.startsWith("de"))) {
    return "de";
  }

  if (candidates.some((entry) => entry.startsWith("en"))) {
    return "en";
  }

  return "pl";
}

export default function FlexBoxGame() {
  const [cssInput, setCssInput] = useState("");
  const [levelIndex, setLevelIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "pl";
    }

    const stored = window.localStorage.getItem("flexbox-dots-lang");
    if (stored === "pl" || stored === "en" || stored === "de") {
      return stored;
    }

    return detectBrowserLanguage();
  });

  useEffect(() => {
    window.localStorage.setItem("flexbox-dots-lang", language);
  }, [language]);

  const t = uiText[language];
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
  const easyCount = levels.filter((level) => level.difficulty === "easy").length;
  const mediumCount = levels.filter((level) => level.difficulty === "medium").length;
  const hardCount = levels.filter((level) => level.difficulty === "hard").length;

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

  const statusText = {
    idle: t.statusIdle,
    error: t.statusError,
    success: t.statusSuccess,
  }[status];

  return (
    <div className="game-shell">
      <div className="language-switch">
        <label htmlFor="language-select">{t.language}</label>
        <select id="language-select" value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
          {languageOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <header className="hero">
        <div>
          <p className="hero__tag">{t.gameTag}</p>
          <h1>{t.gameTitle}</h1>
          <p className="hero__subtitle">{t.subtitle}</p>
          <p className="hero__edu">{t.edu}</p>
        </div>
        <div className="progress-card" aria-label="Game progress">
          <p>
            {t.level} {currentLevel.id}
          </p>
          <strong>{currentLevel.title[language]}</strong>
          <span>
            {t.difficulty}: {difficultyLabels[language][currentLevel.difficulty]}
          </span>
          <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span>{progress}%</span>
          <p className="progress-meta">
            {t.levels}: {levels.length} | {t.difficulties}: 3 ({easyCount}/{mediumCount}/{hardCount})
          </p>
        </div>
      </header>

      <main className="game-grid">
        <section className="challenge-card">
          <div className="challenge-card__header">
            <h2>{t.challenge}</h2>
            <div className="challenge-nav">
              <button onClick={goToPrev} type="button">
                {t.previous}
              </button>
              <button onClick={goToNext} type="button">
                {t.next}
              </button>
            </div>
          </div>
          <p className="challenge-card__task">{currentLevel.task[language]}</p>
          <p className="challenge-card__hint">
            {t.hint}: {currentLevel.hint[language]}
          </p>

          <div className="boards-layout">
            <Board title={t.yourResult} style={liveStyle} dotQty={currentLevel.dotQty} accent="live" />
            <Board title={t.targetRound} style={targetStyle} dotQty={currentLevel.dotQty} accent="target" />
          </div>
        </section>

        <section className="editor-card">
          <h2>{t.enterCss}</h2>
          <TextArea
            value={cssInput}
            onChange={setCssInput}
            placeholder={t.cssPlaceholder}
          />

          <div className="snippet-row">
            {snippets.map((snippet) => (
              <button key={snippet} type="button" onClick={() => addSnippet(snippet)}>
                {snippet}
              </button>
            ))}
          </div>

          <div className="actions">
            <button type="button" className="btn btn--ghost" onClick={resetLevel}>
              {t.reset}
            </button>
            <button type="button" className="btn btn--primary" onClick={checkSolution}>
              {t.check}
            </button>
          </div>

          <p className={`status status--${status}`}>{statusText}</p>
        </section>

        <InfoField language={language} />
      </main>

      <footer className="app-footer">{t.footer}</footer>
    </div>
  );
}
