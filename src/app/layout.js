import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const metadata = {
  title: "Fumo Face Maker",
  description: "Create your own Fumo embroidery files!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
