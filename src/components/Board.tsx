import type { CSSProperties } from "react";

type BoardProps = {
  title: string;
  style: CSSProperties;
  dotQty?: number;
  accent?: "live" | "target";
};

const dotPalette = [
  "linear-gradient(135deg, #ff6f61, #ff9f43)",
  "linear-gradient(135deg, #ffdd59, #f9ca24)",
  "linear-gradient(135deg, #6ab04c, #22a6b3)",
  "linear-gradient(135deg, #4834d4, #686de0)",
  "linear-gradient(135deg, #eb4d4b, #f0932b)",
  "linear-gradient(135deg, #00cec9, #0984e3)",
];

export default function Board({ title, style, dotQty = 4, accent = "live" }: BoardProps) {
  return (
    <section className={`board-card board-card--${accent}`}>
      <header className="board-card__header">
        <h3>{title}</h3>
      </header>
      <div className="board-arena" style={style}>
        {Array.from({ length: dotQty }).map((_, index) => (
          <div
            key={index}
            className="dot"
            style={{
              background: dotPalette[index % dotPalette.length],
              animationDelay: `${index * 120}ms`,
            }}
          >
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
