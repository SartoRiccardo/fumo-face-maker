"use client";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className={"content"}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
