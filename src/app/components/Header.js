import { atma } from "@/lib/fonts";
import header from "./header.module.css";

export default function Header() {
  return (
    <header className={header.header + " shadow"}>
      <p className={atma.className}>Fumo Face Maker</p>
    </header>
  );
}
