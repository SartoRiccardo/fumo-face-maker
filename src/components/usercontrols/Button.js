import "./Button.css";

export default function Button({ children, onClick, className, disabled }) {
  return (
    <button
      className={`shadow-sm ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
