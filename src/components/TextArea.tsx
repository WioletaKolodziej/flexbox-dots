
type TextAreaProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function TextArea({ value, onChange }: TextAreaProps) {
  return (
    <textarea
      className="w-full h-32 border p-2 font-mono"
      placeholder="np. flex-direction: column;"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
