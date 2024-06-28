import { Atma, Inter } from "next/font/google";

export const atma = Atma({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-atma",
});
export const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});
