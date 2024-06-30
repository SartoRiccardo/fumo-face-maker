import "./Button.css";

export default function Button({ children, onClick, className }) {
  return (
    <button className={`${className} shadow-sm`} onClick={onClick}>
      {children}
    </button>
  );
}
