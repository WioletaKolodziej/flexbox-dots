const cheatsheetGroups = [
  {
    title: "Ustawianie osi",
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
];

export default function InfoField() {
  return (
    <section className="cheatsheet">
      <h3>Cheat Sheet</h3>
      {cheatsheetGroups.map((group) => (
        <article key={group.title} className="cheatsheet__group">
          <h4>{group.title}</h4>
          <ul>
            {group.rules.map((rule) => (
              <li key={rule}>
                <code>{rule}</code>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
