import { useState } from "react";
import Board from "./Board";
import TextArea from "./TextArea";

const levels = [
  {
    id: 1,
    task: "Ustaw kropki w kolumnie",
    goal: { flexDirection: "column" as const },
  },
];

export default function FlexBoxGame() {
  const [cssInput, setCssInput] = useState("");
  const [appliedStyle, setAppliedStyle] = useState({});
  const [level] = useState(0);

  const currentLevel = levels[level];
//converse from text input css to react styles
  function cssToReactStyle(css: string): Record<string, string> {
  const style: Record<string, string> = {};
  css.split(";").forEach((rule) => {
    if (!rule.trim()) return;
    const [prop, value] = rule.split(":").map((s) => s?.trim());
    if (!prop || !value) return;

    const camelProp = prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    style[camelProp] = value;
  });
  return style;
}
//check if flexbox styles are correct
  const checkSolution = () => {
  const style = cssToReactStyle(cssInput);

  const goal = currentLevel.goal;
  const success = Object.entries(goal).every(
    ([prop, val]) => style[prop] === val
  );

  setAppliedStyle(style);
  alert(success ? "✅ Brawo!" : "❌ Spróbuj ponownie");
};

  return (
    <div>
      <h1 className="p-10 font-bold">Flexbox-dots</h1>
      <h2 className="text-xl font-bold">Poziom {currentLevel.id}</h2>
      <p>{currentLevel.task}</p>
      <div className="flex gap-4 p-4">
        <Board style={appliedStyle} />
        <div className="flex-1">
          <TextArea value={cssInput} onChange={setCssInput} />
          <button
            onClick={checkSolution}
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
          >
            Sprawdź
          </button>
        </div>
      </div>
    </div>
  );
}
