import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import background from "../../public/images/background.png";
import { atma, inter } from "@/lib/fonts";

export const metadata = {
  title: "Fumo Face Maker",
  description: "Create your own Fumo embroidery files!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${atma.variable} ${inter.variable}`}>
      <head>
        {process.env.NODE_ENV === "production" &&
          process.env.PLAUSIBLE_DATA_DOMAIN &&
          process.env.PLAUSIBLE_SCRIPT_SRC && (
            <script
              defer
              data-domain={process.env.PLAUSIBLE_DATA_DOMAIN}
              src={process.env.PLAUSIBLE_SCRIPT_SRC}
            />
          )}
      </head>

      <body
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "200px",
        }}
      >
        {children}
      </body>
    </html>
  );
}
