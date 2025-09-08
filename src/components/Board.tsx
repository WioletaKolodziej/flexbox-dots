import React from "react";

type BoardProps = {
  style: React.CSSProperties;         // styles user typed
  dotQty?: number;
  initialStyle: React.CSSProperties;  // initial styles for level start
};

export default function Board({ style, dotQty = 3, initialStyle }: BoardProps) {
  // Merge initialStyle and style with "style" overrides
  const combinedStyle = { ...initialStyle, ...style };

  return (
    <div
      className="flex-1 border p-4 h-64 flex bg-gray-50"
      style={combinedStyle}
    >
      {[...Array(dotQty)].map((_, i) => (
        <div key={i} className="w-10 h-10 bg-blue-500 rounded-full m-2" />
      ))}
    </div>
  );
}
