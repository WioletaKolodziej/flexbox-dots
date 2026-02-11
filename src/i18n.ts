export type Language = "pl" | "en" | "de";

export type LocalizedText = Record<Language, string>;

export const languageOptions: Array<{ code: Language; label: string }> = [
  { code: "pl", label: "Polski" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

export const difficultyLabels: Record<Language, Record<"easy" | "medium" | "hard", string>> = {
  pl: { easy: "Łatwy", medium: "Średni", hard: "Trudny" },
  en: { easy: "Easy", medium: "Medium", hard: "Hard" },
  de: { easy: "Leicht", medium: "Mittel", hard: "Schwer" },
};

export const uiText: Record<Language, {
  gameTag: string;
  gameTitle: string;
  subtitle: string;
  edu: string;
  language: string;
  level: string;
  difficulty: string;
  levels: string;
  difficulties: string;
  challenge: string;
  previous: string;
  next: string;
  hint: string;
  yourResult: string;
  targetRound: string;
  enterCss: string;
  cssPlaceholder: string;
  reset: string;
  check: string;
  statusIdle: string;
  statusError: string;
  statusSuccess: string;
  cheatsheet: string;
  footer: string;
}> = {
  pl: {
    gameTag: "Flexbox Dots Game",
    gameTitle: "Playground Flexbox",
    subtitle: "Układaj kolorowe kropki, eksperymentuj z CSS i odblokowuj kolejne wyzwania.",
    edu: "Aplikacja służy do nauki CSS w praktyczny i przyjazny sposób.",
    language: "Język",
    level: "Poziom",
    difficulty: "Trudność",
    levels: "Poziomy",
    difficulties: "Poziomy trudności",
    challenge: "Wyzwanie",
    previous: "Poprzedni",
    next: "Następny",
    hint: "Wskazówka",
    yourResult: "Twój wynik",
    targetRound: "Cel rundy",
    enterCss: "Wpisz CSS",
    cssPlaceholder: "np.\njustify-content: center;\nalign-items: center;",
    reset: "Wyczyść",
    check: "Sprawdź",
    statusIdle: "Wpisz style i sprawdź efekt. Dasz radę.",
    statusError: "Jeszcze chwila. Porównaj układ z podglądem celu i spróbuj ponownie.",
    statusSuccess: "Świetnie! Przechodzisz do kolejnego poziomu.",
    cheatsheet: "Ściąga Flexbox",
    footer: "© 2026 UI-kolo. Wszelkie prawa zastrzeżone.",
  },
  en: {
    gameTag: "Flexbox Dots Game",
    gameTitle: "Playground Flexbox",
    subtitle: "Arrange colorful dots, experiment with CSS, and unlock each challenge.",
    edu: "This app is built to help you learn CSS in a practical, hands-on way.",
    language: "Language",
    level: "Level",
    difficulty: "Difficulty",
    levels: "Levels",
    difficulties: "Difficulty tiers",
    challenge: "Challenge",
    previous: "Previous",
    next: "Next",
    hint: "Hint",
    yourResult: "Your result",
    targetRound: "Target layout",
    enterCss: "Enter CSS",
    cssPlaceholder: "e.g.\njustify-content: center;\nalign-items: center;",
    reset: "Clear",
    check: "Check",
    statusIdle: "Type your styles and check the result. You’ve got this.",
    statusError: "Almost there. Compare your layout with the target and try again.",
    statusSuccess: "Great job! Loading the next level.",
    cheatsheet: "Flexbox Cheatsheet",
    footer: "© 2026 UI-kolo. All rights reserved.",
  },
  de: {
    gameTag: "Flexbox Dots Game",
    gameTitle: "Flexbox Playground",
    subtitle: "Ordne bunte Punkte, probiere CSS aus und meistere jede Aufgabe.",
    edu: "Diese App hilft dir dabei, CSS praxisnah und Schritt für Schritt zu lernen.",
    language: "Sprache",
    level: "Level",
    difficulty: "Schwierigkeit",
    levels: "Level",
    difficulties: "Schwierigkeitsstufen",
    challenge: "Aufgabe",
    previous: "Zurück",
    next: "Weiter",
    hint: "Tipp",
    yourResult: "Dein Ergebnis",
    targetRound: "Ziellayout",
    enterCss: "CSS eingeben",
    cssPlaceholder: "z. B.\njustify-content: center;\nalign-items: center;",
    reset: "Leeren",
    check: "Prüfen",
    statusIdle: "Gib Styles ein und prüfe dein Ergebnis. Du schaffst das.",
    statusError: "Fast geschafft. Vergleiche dein Layout mit dem Ziel und versuche es erneut.",
    statusSuccess: "Stark! Das nächste Level wird geladen.",
    cheatsheet: "Flexbox-Spickzettel",
    footer: "© 2026 UI-kolo. Alle Rechte vorbehalten.",
  },
};

export const infoFieldGroups: Record<Language, Array<{ title: string; rules: string[] }>> = {
  pl: [
    {
      title: "Ustawienia osi",
      rules: [
        "flex-direction: row | row-reverse | column | column-reverse",
        "flex-wrap: nowrap | wrap",
      ],
    },
    {
      title: "Wyrównanie na osi głównej",
      rules: [
        "justify-content: flex-start",
        "justify-content: center",
        "justify-content: space-between",
        "justify-content: space-around",
        "justify-content: space-evenly",
      ],
    },
    {
      title: "Wyrównanie na osi poprzecznej",
      rules: [
        "align-items: flex-start",
        "align-items: center",
        "align-items: flex-end",
        "align-items: stretch",
      ],
    },
    {
      title: "Odstępy",
      rules: ["gap: 8px", "gap: 20px", "gap: 2rem"],
    },
  ],
  en: [
    {
      title: "Axis setup",
      rules: [
        "flex-direction: row | row-reverse | column | column-reverse",
        "flex-wrap: nowrap | wrap",
      ],
    },
    {
      title: "Main-axis alignment",
      rules: [
        "justify-content: flex-start",
        "justify-content: center",
        "justify-content: space-between",
        "justify-content: space-around",
        "justify-content: space-evenly",
      ],
    },
    {
      title: "Cross-axis alignment",
      rules: [
        "align-items: flex-start",
        "align-items: center",
        "align-items: flex-end",
        "align-items: stretch",
      ],
    },
    {
      title: "Spacing",
      rules: ["gap: 8px", "gap: 20px", "gap: 2rem"],
    },
  ],
  de: [
    {
      title: "Achsen einstellen",
      rules: [
        "flex-direction: row | row-reverse | column | column-reverse",
        "flex-wrap: nowrap | wrap",
      ],
    },
    {
      title: "Ausrichtung auf der Hauptachse",
      rules: [
        "justify-content: flex-start",
        "justify-content: center",
        "justify-content: space-between",
        "justify-content: space-around",
        "justify-content: space-evenly",
      ],
    },
    {
      title: "Ausrichtung auf der Querachse",
      rules: [
        "align-items: flex-start",
        "align-items: center",
        "align-items: flex-end",
        "align-items: stretch",
      ],
    },
    {
      title: "Abstände",
      rules: ["gap: 8px", "gap: 20px", "gap: 2rem"],
    },
  ],
};
