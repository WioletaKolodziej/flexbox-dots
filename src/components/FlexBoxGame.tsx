import { useState, useEffect } from "react";
import Board from "./Board";
import TextArea from "./TextArea";
import InfoField from "./InfoField";
import { levels } from "./levels";

export default function FlexBoxGame() {
  const [cssInput, setCssInput] = useState("");
  const [appliedStyle, setAppliedStyle] = useState({});
  const [level, setLevel] = useState(0);
  const [infoExpanded, setInfoExpanded] = useState(false);

  const currentLevel = levels[level];

  useEffect(() => {
    setAppliedStyle(currentLevel.initialStyle || {});
    setCssInput("");
  }, [level]);

  useEffect(() => {
    setAppliedStyle((prev) => ({
      ...prev,
      ...cssToReactStyle(cssInput),
    }));
  }, [cssInput]);

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

  const checkSolution = () => {
    const style = cssToReactStyle(cssInput);
    const goal = currentLevel.goal;
    const success = Object.entries(goal).every(
      ([prop, val]) => style[prop] === val
    );
    alert(success ? "✅ Success!" : "❌ Try again");
    if (success) {
      if (level < levels.length - 1) {
        setLevel(level + 1);
      } else {
        alert("🎉 Congratulation!");
        setLevel(0);
      }
      setCssInput("");
    }
  };

  // Set fixed width for sidebar when expanded, and fixed width for collapsed tab
  const sidebarExpandedWidth = 280; // in pixels, approx w-72 Tailwind
  const sidebarCollapsedWidth = 40; // enough for tab with text rotated

  return (
    <div>
      <h1 className="p-10 font-bold">Flexbox-dots</h1>
      <div className="flex">
        {/* Sidebar container - fixed width and full height, background slightly darker */}
        <div
          style={{
            width: infoExpanded ? sidebarExpandedWidth : sidebarCollapsedWidth,
            transition: "width 0.3s ease",
            height: "calc(100vh - 80px)", // leave space for header padding
            position: "fixed",
            top: 80,
            left: 0,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            color: "#f1f5f9",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
          aria-label="Cheat Sheet sidebar"
        >
          {/* Collapsed tab with vertical text and arrow */}
          {!infoExpanded && (
            <button
              aria-label="Expand Cheat Sheet"
              title="Expand Cheat Sheet"
              onClick={() => setInfoExpanded(true)}
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "#f1f5f9",
                fontWeight: "bold",
                padding: "0.5rem",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.15)")
              }
            >
              Cheat Sheet&nbsp;
              <span aria-hidden="true" style={{ fontSize: "1.2rem" }}></span>
            </button>
          )}
          {/* Expanded sidebar content */}
          {infoExpanded && (
            <>
              {/* Close button top-right */}
              <button
                onClick={() => setInfoExpanded(false)}
                aria-label="Collapse Cheat Sheet"
                title="Collapse Cheat Sheet"
                style={{
                  alignSelf: "flex-end",
                  background: "transparent",
                  border: "none",
                  color: "#f1f5f9",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  padding: "0.5rem 1rem",
                  userSelect: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e0e7ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f1f5f9")}
              >
                &times;
              </button>
              {/* The actual InfoField content scrollable */}
              <div
                style={{
                  overflowY: "auto",
                  padding: "0 1rem 1rem 1rem",
                  flex: 1,
                }}
              >
                <InfoField />
              </div>
            </>
          )}
        </div>

        {/* Main content area shifted by sidebar width */}
        <main
          style={{
            marginLeft: infoExpanded
              ? sidebarExpandedWidth
              : sidebarCollapsedWidth,
            padding: "1rem",
            transition: "margin-left 0.3s ease",
            width: `calc(100% - ${
              infoExpanded ? sidebarExpandedWidth : sidebarCollapsedWidth
            }px)`,
          }}
        >
          <h2 className="text-2xl font-bold uppercase">
            Level {currentLevel.id}
          </h2>
          <br />
          <p>{currentLevel.task}</p>
          <div className="flex gap-4 p-4">
            <Board
              style={{ display: "flex", ...appliedStyle }}
              dotQty={currentLevel.dotQty}
              initialStyle={currentLevel.initialStyle}
            />
            <div className="flex-1">
              <TextArea value={cssInput} onChange={setCssInput} />
              <button
                onClick={checkSolution}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500"
              >
                Confirm
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
