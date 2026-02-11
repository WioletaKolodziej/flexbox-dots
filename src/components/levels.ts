import type { CSSProperties } from "react";
import type { LocalizedText } from "../i18n";

type FlexboxStyle = Partial<
  Pick<
    CSSProperties,
    "flexDirection" | "justifyContent" | "alignItems" | "gap" | "flexWrap"
  >
>;

export type Difficulty = "easy" | "medium" | "hard";

export type Level = {
  id: number;
  title: LocalizedText;
  difficulty: Difficulty;
  task: LocalizedText;
  hint: LocalizedText;
  dotQty: number;
  initialStyle: FlexboxStyle;
  goal: FlexboxStyle;
};

const lt = (pl: string, en: string, de: string): LocalizedText => ({ pl, en, de });

export const levels: Level[] = [
  {
    id: 1,
    title: lt("Pionowy start", "Vertical Start", "Vertikaler Start"),
    difficulty: "easy",
    task: lt(
      "Ułóż kropki pionowo, jedna pod drugą.",
      "Stack the dots vertically, one below another.",
      "Ordne die Punkte vertikal untereinander an."
    ),
    hint: lt(
      "Świetny początek: ustaw oś główną na pionową.",
      "Great start: switch the main axis to vertical.",
      "Starker Start: Stelle die Hauptachse auf vertikal um."
    ),
    dotQty: 4,
    initialStyle: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" },
    goal: { flexDirection: "column" },
  },
  {
    id: 2,
    title: lt("Scena centralna", "Center Stage", "Zentrum"),
    difficulty: "easy",
    task: lt("Wycentruj kropki w poziomie.", "Center the dots horizontally.", "Zentriere die Punkte horizontal."),
    hint: lt(
      "Skup się na wyrównaniu wzdłuż osi głównej.",
      "Focus on alignment along the main axis.",
      "Konzentriere dich auf die Ausrichtung entlang der Hauptachse."
    ),
    dotQty: 4,
    initialStyle: { flexDirection: "row", justifyContent: "flex-start" },
    goal: { justifyContent: "center" },
  },
  {
    id: 3,
    title: lt("Równe odstępy", "Perfect Spacing", "Perfekte Abstände"),
    difficulty: "easy",
    task: lt(
      "Rozmieść kropki równomiernie na szerokości planszy.",
      "Distribute the dots evenly across the board.",
      "Verteile die Punkte gleichmäßig über die gesamte Fläche."
    ),
    hint: lt(
      "Wybierz wartość, która daje równe przerwy między elementami.",
      "Pick the value that creates equal spaces between items.",
      "Wähle den Wert, der gleiche Abstände zwischen den Elementen erzeugt."
    ),
    dotQty: 4,
    initialStyle: { flexDirection: "row", justifyContent: "flex-start" },
    goal: { justifyContent: "space-between" },
  },
  {
    id: 4,
    title: lt("Na dół", "Drop Zone", "Nach unten"),
    difficulty: "easy",
    task: lt(
      "Przenieś wszystkie kropki na dół kontenera.",
      "Move all dots to the bottom of the container.",
      "Bewege alle Punkte an den unteren Rand des Containers."
    ),
    hint: lt(
      "Tu działa oś poprzeczna. To dobry moment na align-items.",
      "This one uses the cross axis. align-items is the key.",
      "Hier zählt die Querachse. align-items ist der Schlüssel."
    ),
    dotQty: 3,
    initialStyle: { flexDirection: "row", alignItems: "flex-start" },
    goal: { alignItems: "flex-end" },
  },
  {
    id: 5,
    title: lt("Odwrócony kierunek", "Reverse Flow", "Umgekehrte Richtung"),
    difficulty: "easy",
    task: lt(
      "Odwróć kolejność kropek w poziomie.",
      "Reverse the horizontal order of the dots.",
      "Drehe die horizontale Reihenfolge der Punkte um."
    ),
    hint: lt(
      "Poszukaj odwróconej wersji układu row.",
      "Look for the reversed version of row.",
      "Suche nach der umgekehrten Variante von row."
    ),
    dotQty: 5,
    initialStyle: { flexDirection: "row" },
    goal: { flexDirection: "row-reverse" },
  },
  {
    id: 6,
    title: lt("Górna linia", "Top Line", "Obere Linie"),
    difficulty: "easy",
    task: lt(
      "Ustaw kropki przy górnej krawędzi planszy.",
      "Place the dots along the top edge.",
      "Positioniere die Punkte an der oberen Kante."
    ),
    hint: lt(
      "Znów oś poprzeczna. Jesteś blisko.",
      "Cross-axis again. You're close.",
      "Wieder die Querachse. Du bist fast da."
    ),
    dotQty: 4,
    initialStyle: { alignItems: "center" },
    goal: { alignItems: "flex-start" },
  },
  {
    id: 7,
    title: lt("Start z lewej", "Left Start", "Start links"),
    difficulty: "easy",
    task: lt(
      "Ustaw kropki na początku osi głównej.",
      "Move the dots to the start of the main axis.",
      "Setze die Punkte an den Anfang der Hauptachse."
    ),
    hint: lt(
      "Wybierz podstawową wartość wyrównania poziomego.",
      "Use the default-style horizontal alignment value.",
      "Nutze den grundlegenden Wert für die horizontale Ausrichtung."
    ),
    dotQty: 4,
    initialStyle: { justifyContent: "center" },
    goal: { justifyContent: "flex-start" },
  },
  {
    id: 8,
    title: lt("Pion od tyłu", "Vertical Reverse", "Vertikal rückwärts"),
    difficulty: "easy",
    task: lt(
      "Odwróć kolejność kropek w pionie.",
      "Reverse the order of dots vertically.",
      "Drehe die Reihenfolge der Punkte vertikal um."
    ),
    hint: lt(
      "To pionowy odpowiednik row-reverse.",
      "Think of this as the vertical version of row-reverse.",
      "Das ist die vertikale Variante von row-reverse."
    ),
    dotQty: 4,
    initialStyle: { flexDirection: "column" },
    goal: { flexDirection: "column-reverse" },
  },
  {
    id: 9,
    title: lt("Delikatny odstęp", "Soft Gap", "Sanfter Abstand"),
    difficulty: "easy",
    task: lt(
      "Dodaj mały odstęp między kropkami.",
      "Add a small gap between the dots.",
      "Füge einen kleinen Abstand zwischen den Punkten hinzu."
    ),
    hint: lt(
      "Użyj gap i ustaw wartość w pikselach.",
      "Use gap with a pixel value.",
      "Nutze gap mit einem Pixelwert."
    ),
    dotQty: 4,
    initialStyle: { gap: "0px" },
    goal: { gap: "8px" },
  },
  {
    id: 10,
    title: lt("Pionowy środek", "Vertical Center", "Vertikale Mitte"),
    difficulty: "easy",
    task: lt("Wycentruj kropki w pionie.", "Center the dots vertically.", "Zentriere die Punkte vertikal."),
    hint: lt(
      "Idealny moment na align-items: center.",
      "This is a perfect case for align-items: center.",
      "Das ist ein perfekter Fall für align-items: center."
    ),
    dotQty: 5,
    initialStyle: { alignItems: "flex-start" },
    goal: { alignItems: "center" },
  },
  {
    id: 11,
    title: lt("Dwie osie", "Dual Axis", "Doppelte Achse"),
    difficulty: "medium",
    task: lt(
      "Wycentruj kropki po osi głównej i ustaw je na górze.",
      "Center dots on the main axis and keep them at the top.",
      "Zentriere die Punkte auf der Hauptachse und halte sie oben."
    ),
    hint: lt(
      "To poziom na dwa ustawienia naraz.",
      "This level needs two properties at once.",
      "Für dieses Level brauchst du zwei Eigenschaften gleichzeitig."
    ),
    dotQty: 5,
    initialStyle: { justifyContent: "flex-start", alignItems: "center" },
    goal: { justifyContent: "center", alignItems: "flex-start" },
  },
  {
    id: 12,
    title: lt("Szeroki rozkład", "Wide Split", "Breite Verteilung"),
    difficulty: "medium",
    task: lt(
      "Rozsuń kropki i ustaw je przy dolnej krawędzi.",
      "Spread the dots and align them to the bottom.",
      "Verteile die Punkte und richte sie unten aus."
    ),
    hint: lt(
      "Połącz justify-content z align-items.",
      "Combine justify-content with align-items.",
      "Kombiniere justify-content mit align-items."
    ),
    dotQty: 5,
    initialStyle: { justifyContent: "center", alignItems: "center" },
    goal: { justifyContent: "space-between", alignItems: "flex-end" },
  },
  {
    id: 13,
    title: lt("Fokus na kolumnę", "Column Focus", "Spaltenfokus"),
    difficulty: "medium",
    task: lt(
      "Przełącz na układ pionowy i wycentruj elementy na osi poprzecznej.",
      "Switch to vertical flow and center items on the cross axis.",
      "Wechsle auf vertikales Layout und zentriere auf der Querachse."
    ),
    hint: lt(
      "Najpierw kierunek, potem wyrównanie.",
      "Set direction first, then alignment.",
      "Erst die Richtung, dann die Ausrichtung."
    ),
    dotQty: 4,
    initialStyle: { flexDirection: "row", alignItems: "flex-start" },
    goal: { flexDirection: "column", alignItems: "center" },
  },
  {
    id: 14,
    title: lt("Odwrotny środek", "Reverse Center", "Umkehr-Zentrum"),
    difficulty: "medium",
    task: lt(
      "Odwróć rząd i ustaw kropki na środku.",
      "Reverse the row and center the dots.",
      "Drehe die Zeile um und zentriere die Punkte."
    ),
    hint: lt(
      "Połącz zmianę kierunku z pozycjonowaniem.",
      "Combine direction change with positioning.",
      "Kombiniere Richtungswechsel mit Positionierung."
    ),
    dotQty: 5,
    initialStyle: { flexDirection: "row", justifyContent: "flex-start" },
    goal: { flexDirection: "row-reverse", justifyContent: "center" },
  },
  {
    id: 15,
    title: lt("Balans i odstęp", "Balanced Gap", "Balance mit Abstand"),
    difficulty: "medium",
    task: lt(
      "Dodaj wyraźny odstęp i ustaw kropki centralnie.",
      "Add a visible gap and center the dots.",
      "Füge einen deutlichen Abstand hinzu und zentriere die Punkte."
    ),
    hint: lt(
      "Działa duet: gap i justify-content.",
      "Use the combo: gap + justify-content.",
      "Der Schlüssel ist die Kombination aus gap und justify-content."
    ),
    dotQty: 4,
    initialStyle: { gap: "0px", justifyContent: "flex-start" },
    goal: { gap: "20px", justifyContent: "center" },
  },
  {
    id: 16,
    title: lt("Kolumna na dół", "Column Bottom", "Spalte nach unten"),
    difficulty: "medium",
    task: lt(
      "Ustaw układ pionowy i przesuń kropki na dół.",
      "Switch to a vertical layout and move dots to the bottom.",
      "Stelle auf vertikales Layout um und bewege die Punkte nach unten."
    ),
    hint: lt(
      "Po zmianie osi role osi też się zmieniają.",
      "Remember: when the axis changes, alignment behavior changes too.",
      "Denk daran: Mit dem Achsenwechsel ändert sich auch das Ausrichtungsverhalten."
    ),
    dotQty: 4,
    initialStyle: { flexDirection: "row", justifyContent: "flex-start" },
    goal: { flexDirection: "column", justifyContent: "flex-end" },
  },
  {
    id: 17,
    title: lt("Podwójny środek", "Double Center", "Doppelzentrum"),
    difficulty: "medium",
    task: lt(
      "Ustaw kropki dokładnie na środku planszy.",
      "Place the dots exactly in the center of the board.",
      "Platziere die Punkte exakt in der Mitte des Spielfelds."
    ),
    hint: lt(
      "Potrzebujesz jednocześnie osi poziomej i pionowej.",
      "You need both horizontal and vertical alignment.",
      "Du brauchst horizontale und vertikale Ausrichtung gleichzeitig."
    ),
    dotQty: 5,
    initialStyle: { justifyContent: "space-between", alignItems: "flex-start" },
    goal: { justifyContent: "center", alignItems: "center" },
  },
  {
    id: 18,
    title: lt("Odwrotna wieża", "Reverse Tower", "Umgekehrter Turm"),
    difficulty: "medium",
    task: lt(
      "Ustaw odwróconą kolumnę i wyrównaj kropki do końca osi poprzecznej.",
      "Use a reversed column and align dots to the end of the cross axis.",
      "Nutze eine umgekehrte Spalte und richte die Punkte am Ende der Querachse aus."
    ),
    hint: lt(
      "Tu świetnie zagrają: column-reverse i align-items.",
      "column-reverse and align-items are your best tools here.",
      "Hier funktionieren column-reverse und align-items besonders gut."
    ),
    dotQty: 4,
    initialStyle: { flexDirection: "row", alignItems: "center" },
    goal: { flexDirection: "column-reverse", alignItems: "flex-end" },
  },
  {
    id: 19,
    title: lt("Orbita równowagi", "Even Orbit", "Gleichmäßige Umlaufbahn"),
    difficulty: "medium",
    task: lt(
      "Rozstaw kropki z równymi marginesami dookoła.",
      "Space the dots with even margins around them.",
      "Verteile die Punkte mit gleichmäßigen Abständen rundherum."
    ),
    hint: lt(
      "Wartość space-around da tutaj najlepszy efekt.",
      "space-around will give you the right feel.",
      "Mit space-around erreichst du hier das gewünschte Ergebnis."
    ),
    dotQty: 5,
    initialStyle: { justifyContent: "flex-start" },
    goal: { justifyContent: "space-around" },
  },
  {
    id: 20,
    title: lt("Start zawijania", "Wrap Start", "Umbruch-Start"),
    difficulty: "medium",
    task: lt(
      "Włącz zawijanie elementów na wiele linii.",
      "Enable wrapping across multiple lines.",
      "Aktiviere den Umbruch auf mehrere Zeilen."
    ),
    hint: lt(
      "To osobna właściwość, niezależna od direction.",
      "This uses a separate property from direction.",
      "Das ist eine eigene Eigenschaft, unabhängig von direction."
    ),
    dotQty: 8,
    initialStyle: { flexWrap: "nowrap" },
    goal: { flexWrap: "wrap" },
  },
  {
    id: 21,
    title: lt("Kontrola chaosu", "Chaos Control", "Chaoskontrolle"),
    difficulty: "hard",
    task: lt(
      "Włącz zawijanie i wycentruj kropki na osi głównej.",
      "Enable wrapping and center the dots on the main axis.",
      "Aktiviere Umbruch und zentriere die Punkte auf der Hauptachse."
    ),
    hint: lt(
      "Połącz flex-wrap z justify-content.",
      "Combine flex-wrap with justify-content.",
      "Kombiniere flex-wrap mit justify-content."
    ),
    dotQty: 8,
    initialStyle: { flexWrap: "nowrap", justifyContent: "flex-start" },
    goal: { flexWrap: "wrap", justifyContent: "center" },
  },
  {
    id: 22,
    title: lt("Odwrócona siatka", "Reverse Grid", "Umgekehrtes Gitter"),
    difficulty: "hard",
    task: lt(
      "Odwróć rząd, włącz wrap i dodaj odstęp.",
      "Reverse the row, enable wrap, and add spacing.",
      "Drehe die Zeile um, aktiviere Umbruch und füge Abstand hinzu."
    ),
    hint: lt(
      "To poziom na trzy właściwości jednocześnie.",
      "This level asks for three properties at once.",
      "In diesem Level brauchst du drei Eigenschaften gleichzeitig."
    ),
    dotQty: 9,
    initialStyle: { flexDirection: "row", flexWrap: "nowrap", gap: "0px" },
    goal: { flexDirection: "row-reverse", flexWrap: "wrap", gap: "8px" },
  },
  {
    id: 23,
    title: lt("Matryca kolumn", "Column Matrix", "Spaltenmatrix"),
    difficulty: "hard",
    task: lt(
      "Ustaw pionowy układ, zawijanie i wyrównanie do końca osi głównej.",
      "Set vertical flow, enable wrapping, and align to the end of the main axis.",
      "Stelle vertikalen Fluss ein, aktiviere Umbruch und richte am Ende der Hauptachse aus."
    ),
    hint: lt(
      "Pamiętaj: tutaj oś główna jest pionowa.",
      "Remember: the main axis is vertical in this one.",
      "Denk daran: In diesem Level ist die Hauptachse vertikal."
    ),
    dotQty: 9,
    initialStyle: { flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-start" },
    goal: { flexDirection: "column", flexWrap: "wrap", justifyContent: "flex-end" },
  },
  {
    id: 24,
    title: lt("Precyzyjny miks", "Precision Mix", "Präzisionsmix"),
    difficulty: "hard",
    task: lt(
      "Rozmieść kropki równo, ustaw je na dole i dodaj większy odstęp.",
      "Distribute dots evenly, keep them at the bottom, and add a bigger gap.",
      "Verteile die Punkte gleichmäßig, richte sie unten aus und nutze einen größeren Abstand."
    ),
    hint: lt(
      "Cel wymaga trzech ustawień naraz. Dasz radę.",
      "This target needs three settings together. You can do it.",
      "Dieses Ziel braucht drei Einstellungen gleichzeitig. Du schaffst das."
    ),
    dotQty: 8,
    initialStyle: { justifyContent: "flex-start", alignItems: "flex-start", gap: "0px" },
    goal: { justifyContent: "space-evenly", alignItems: "flex-end", gap: "20px" },
  },
  {
    id: 25,
    title: lt("Wielki finał", "Grand Finale", "Großes Finale"),
    difficulty: "hard",
    task: lt(
      "Finał: odwrócona kolumna, wrap, idealne wyśrodkowanie i odstępy.",
      "Final round: reverse column, wrap, perfect centering, and spacing.",
      "Finale: umgekehrte Spalte, Umbruch, perfekte Zentrierung und saubere Abstände."
    ),
    hint: lt(
      "Połącz wszystkie kluczowe elementy flexbox i domknij grę.",
      "Bring all core flexbox concepts together and finish strong.",
      "Kombiniere alle wichtigen Flexbox-Konzepte und schließe stark ab."
    ),
    dotQty: 10,
    initialStyle: {
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "0px",
    },
    goal: {
      flexDirection: "column-reverse",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
    },
  },
];
