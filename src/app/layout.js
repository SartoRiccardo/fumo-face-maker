import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Titan_One } from "next/font/google";

export const metadata = {
  title: "Fumo Face Maker",
  description: "Create your own Fumo embroidery files!",
};

const happyMonkey = Titan_One({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={happyMonkey.className}>{children}</body>
    </html>
  );
}
