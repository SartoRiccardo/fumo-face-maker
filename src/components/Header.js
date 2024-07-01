"use client";
import { atma } from "@/lib/fonts";
import header from "./header.module.css";
import Button from "./controls/Button";
import { useState } from "react";
import News from "./static/News";

export default function Header() {
  const [newsShow, setNewsShow] = useState(false);

  return (
    <header className={header.header + " shadow"}>
      <News show={newsShow} onHide={(_e) => setNewsShow(false)} />
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column justify-content-center h-100">
            <p className={`${atma.className}`}>Fumo Face Maker</p>
          </div>
        </div>
        <div className="col-auto">
          <Button onClick={(_e) => setNewsShow(true)}>
            <i className="bi bi-newspaper fs-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
