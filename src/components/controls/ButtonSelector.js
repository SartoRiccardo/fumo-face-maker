import Button from "./Button";

export default function ButtonSelector({ children, onChange, value }) {
  return (
    <div>
      {children.map((child, idx) => (
        <Button
          className={`mx-2 ${value === idx ? "primary" : "border"}`}
          key={idx}
          onClick={(_e) => onChange(idx)}
        >
          {child}
        </Button>
      ))}
    </div>
  );
}
