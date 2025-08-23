import { useState } from "react";
import Board from "./Board";
import TextArea from "./TextArea";
import InfoField from "./InfoField";

const levels = [
  {
    id: 1,
    task: "Place the dots vertically",
    dotQty: 3,
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

      const camelProp = prop.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
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
      <div className="flex gap-20">
        <div className="w-1/3">
          <InfoField />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold uppercase">Level {currentLevel.id}</h2>
          <br></br>
          <p>{currentLevel.task}</p>
          <div className="flex gap-4 p-4">
            <Board style={appliedStyle} dotQty={currentLevel.dotQty} />
            <div className="flex-1">
              <TextArea value={cssInput} onChange={setCssInput} />
              <button
                onClick={checkSolution}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
