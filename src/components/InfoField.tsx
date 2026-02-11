import { infoFieldGroups, uiText, type Language } from "../i18n";

type InfoFieldProps = {
  language: Language;
};

export default function InfoField({ language }: InfoFieldProps) {
  const groups = infoFieldGroups[language];

  return (
    <section className="cheatsheet">
      <h3>{uiText[language].cheatsheet}</h3>
      {groups.map((group) => (
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
