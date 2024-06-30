import "./Button.css";

export default function Button({ children, onClick, className, disabled }) {
  return (
    <button
      className={`${className} shadow-sm`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
