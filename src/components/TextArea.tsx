type TextAreaProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function TextArea({ value, onChange }: TextAreaProps) {
  return (
    <label className="editor" htmlFor="css-editor">
      <div className="editor__top">
        <span className="editor__dot editor__dot--red" />
        <span className="editor__dot editor__dot--yellow" />
        <span className="editor__dot editor__dot--green" />
        <p>flexbox.css</p>
      </div>
      <textarea
        id="css-editor"
        className="editor__textarea"
        placeholder={"np.\njustify-content: center;\nalign-items: center;"}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        spellCheck={false}
      />
    </label>
  );
}
