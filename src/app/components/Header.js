import header from "./header.module.css";

export default function Header() {
  return (
    <header className={header.header + " shadow"}>
      <p>Fumo Face Maker</p>
    </header>
  );
}
