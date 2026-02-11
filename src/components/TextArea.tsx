type TextAreaProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
};

export default function TextArea({ value, onChange, placeholder }: TextAreaProps) {
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
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        spellCheck={false}
      />
    </label>
  );
}
