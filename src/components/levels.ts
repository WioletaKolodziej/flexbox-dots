// levels.ts

import type { CSSProperties } from "react";

type FlexboxStyle = Partial<
  Pick<CSSProperties, "flexDirection" | "justifyContent" | "alignItems" | "gap">
>;

type Level = {
  id: number;
  task: string;
  dotQty: number;
  initialStyle: FlexboxStyle;
  goal: FlexboxStyle;
};

export const levels: Level[] = [
  {
    id: 1,
    task: "Place the dots vertically using flex-direction (main axis becomes column)",
    dotQty: 3,
    initialStyle: { flexDirection: "row" },
    goal: { flexDirection: "column" },
  },
  {
    id: 2,
    task: "Place the dots horizontally using flex-direction (main axis becomes row)",
    dotQty: 4,
    initialStyle: { flexDirection: "column" },
    goal: { flexDirection: "row" },
  },
  {
    id: 3,
    task: "Space dots evenly using justify-content (distribute items along main axis)",
    dotQty: 3,
    initialStyle: { justifyContent: "flex-start" },
    goal: { justifyContent: "space-between" },
  },
  {
    id: 4,
    task: "Center dots horizontally using justify-content (center items along main axis)",
    dotQty: 3,
    initialStyle: { justifyContent: "flex-start" },
    goal: { justifyContent: "center" },
  },
  {
    id: 5,
    task: "Align dots at bottom vertically using align-items (align items on cross axis)",
    dotQty: 3,
    initialStyle: { alignItems: "flex-start" },
    goal: { alignItems: "flex-end" },
  },
  {
    id: 6,
    task: "Align dots at top vertically using align-items (align items on cross axis)",
    dotQty: 3,
    initialStyle: { alignItems: "flex-end" },
    goal: { alignItems: "flex-start" },
  },
  {
    id: 7,
    task: "Reverse dots direction horizontally using flex-direction row-reverse (reverse main axis)",
    dotQty: 3,
    initialStyle: { flexDirection: "row" },
    goal: { flexDirection: "row-reverse" },
  },
  {
    id: 8,
    task: "Reverse dots direction vertically using flex-direction column-reverse (reverse main axis)",
    dotQty: 3,
    initialStyle: { flexDirection: "column" },
    goal: { flexDirection: "column-reverse" },
  },
  {
    id: 9,
    task: "Add space between dots using gap (spacing in flex container)",
    dotQty: 3,
    initialStyle: { gap: "0" },
    goal: { gap: "20px" },
  },
  {
    id: 10,
    task: "Center dots both horizontally and vertically using justify-content and align-items",
    dotQty: 5,
    initialStyle: { justifyContent: "flex-start", alignItems: "flex-start" },
    goal: { justifyContent: "center", alignItems: "center" },
  },
];
