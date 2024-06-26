import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Atma } from "next/font/google";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Fumo Face Maker",
  description: "Create your own Fumo embroidery files!",
};

const h1font = Atma({ weight: "700", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={h1font.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
