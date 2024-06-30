import Button from "./Button";

export default function ButtonSelector({ children, onChange, value }) {
  return (
    <div>
      {children.map((child, idx) => (
        <Button
          className={`mx-2 my-1 border ${value === idx ? "primary" : ""}`}
          key={idx}
          onClick={(_e) => onChange(idx)}
        >
          {child}
        </Button>
      ))}
    </div>
  );
}
