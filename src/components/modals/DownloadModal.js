"use client";
import Modal from "react-bootstrap/Modal";
import Button from "../usercontrols/Button";
import { useAppSelector } from "@/lib/store";
import { selectFumoFace } from "@/features/fumoFaceSlice";
import { useState } from "react";
import download from "downloadjs";

export default function DownloadModal({ show, onHide }) {
  const fumoFace = useAppSelector(selectFumoFace);
  const [filename, setFilename] = useState("generated-file");
  const [format, setFormat] = useState("PES");
  const [isDownloading, setDownloading] = useState(false);

  const generateFace = async (_e) => {
    setDownloading(true);

    const paramsDict = {
      eyes: fumoFace.eyes.chosen[0] + 1,
      eyelashes: fumoFace.eyelash + 1,
      eyebrows: fumoFace.eyebrows + 1,
      mouth: fumoFace.mouth + 1,
      format,
    };
    let eyecols = [fumoFace.eyes.colors.inner[0]];
    let outcols = [];
    if (fumoFace.hasDifferentEyeOutline) {
      paramsDict.diff_clr_outline = fumoFace.hasDifferentEyeOutline;
      outcols.push(fumoFace.eyes.colors.outline[0]);
    }
    if (fumoFace.hasHeterochromia) {
      paramsDict.heterochromia = fumoFace.hasHeterochromia;
      eyecols.push(fumoFace.eyes.colors.inner[1]);
      if (fumoFace.hasDifferentEyeOutline)
        outcols.push(fumoFace.eyes.colors.outline[1]);
    }
    paramsDict.eyecols = eyecols.join(",");
    if (outcols.length) paramsDict.outcols = outcols.join(",");

    const params = new URLSearchParams(paramsDict);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + "/face?" + params.toString()
      );
      const blob = await response.blob();
      download(blob, `${filename}.${format}`, "application/octet-stream");
    } catch (ex) {}

    setDownloading(false);
  };

  return (
    <Modal show={show} onHide={(_e) => !isDownloading && onHide(_e)} size="lg">
      <Modal.Body>
        <h3 className={" text-center"}>Download</h3>
        <form className="row">
          <div className="col-12 col-sm-8 col-md-9 col-lg-10">
            <input
              type="text"
              className="form-control"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
            ></input>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setFormat(e.target.value.toUpperCase())}
              value={format}
            >
              <option value="DST">DST</option>
              <option value="PES">PES</option>
            </select>
          </div>
          <div className="d-flex justify-content-center col-12">
            <Button
              className={"mt-3 primary"}
              disabled={isDownloading}
              onClick={generateFace}
            >
              Download
            </Button>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={(_e) => !isDownloading && onHide(_e)}>
          Nevermind
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
