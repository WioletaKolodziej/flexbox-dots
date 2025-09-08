import { useState, useEffect } from "react";
import Board from "./Board";
import TextArea from "./TextArea";
import InfoField from "./InfoField";
import { levels } from "./levels";

/**
 * Converts CSS string (e.g. "flex-direction: column;") to React inline style object.
 * It handles CSS property names with dashes converting them to camelCase.
 */
function cssToReactStyle(css: string): Record<string, string> {
  const style: Record<string, string> = {};
  css.split(";").forEach((rule) => {
    if (!rule.trim()) return;
    const [prop, value] = rule.split(":").map((s) => s?.trim());
    if (!prop || !value) return;
    // Convert CSS property name to camelCase for React style object
    const camelProp = prop.replace(/-([a-z])/g, (_, letter) =>
      letter.toUpperCase()
    );
    style[camelProp] = value;
  });
  return style;
}

export default function FlexBoxGame() {
  // cssInput holds the raw CSS string input from the user
  const [cssInput, setCssInput] = useState("");
  // appliedStyle holds the parsed React style object applied to Board
  const [appliedStyle, setAppliedStyle] = useState({});
  // current level index in the levels array
  const [level, setLevel] = useState(0);
  const currentLevel = levels[level];

  /**
   * Using useEffect to update appliedStyle dynamically as user types CSS in TextArea.
   * This enables Board to reflect CSS changes live without clicking Confirm.
   */
  useEffect(() => {
    setAppliedStyle(cssToReactStyle(cssInput));
  }, [cssInput]);

  /**
   * Checks if the style typed matches the goal style of the current level.
   * Displays success/failure alert, advances level or resets upon success.
   */
  const checkSolution = () => {
    const style = cssToReactStyle(cssInput);
    const goal = currentLevel.goal;
    const success = Object.entries(goal).every(
      ([prop, val]) => style[prop] === val
    );
    alert(success ? "✅ Brawo!" : "❌ Spróbuj ponownie");
    if (success) {
      if (level < levels.length - 1) {
        const nextLevel = level + 1;
        setLevel(nextLevel);
        setCssInput(""); // Reset input for next level
      } else {
        alert("🎉 Gratulacje! Ukończono wszystkie poziomy.");
        setLevel(0);      // Restart from first level or could stop game here
        setCssInput("");
      }
    }
  };

  // Combine appliedStyle with display flex to guarantee flex container behavior
  const combinedStyle = { display: "flex", ...appliedStyle };

  return (
    <div>
      <h1 className="p-10 font-bold">Flexbox-dots</h1>
      <div className="flex gap-20">
        <div className="w-1/3">
          <InfoField />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold uppercase">Level {currentLevel.id}</h2>
          <br />
          <p>{currentLevel.task}</p>
          <div className="flex gap-4 p-4">
            {/* Board shows dots with combined flex styles */}
            <Board style={combinedStyle} dotQty={currentLevel.dotQty} initialStyle={currentLevel.initialStyle} />
            <div className="flex-1">
              {/* TextArea for CSS input, updates cssInput onChange */}
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
