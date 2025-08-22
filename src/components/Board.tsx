import React from "react";

type BoardProps = {
  style: React.CSSProperties;
};

export default function Board({ style }: BoardProps) {
  return (
    <div className="flex-1 border p-4 h-64 flex bg-gray-50" style={style}>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-10 h-10 bg-blue-500 rounded-full m-2" />
      ))}
    </div>
  );
}
