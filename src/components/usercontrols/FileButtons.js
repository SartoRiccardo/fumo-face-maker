import cssToast from "./Toast.module.css";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useAppSelector } from "@/lib/store";
import { selectFumoFace } from "@/features/fumoFaceSlice";
import { getFaceQuery } from "@/features/fumoFaceSlice";
import copyToClipboard from "clipboard-copy";
import DownloadModal from "../modals/DownloadModal";

export default function FileButtons() {
  const fumoFace = useAppSelector(selectFumoFace);
  const [dlModOpen, setDlModOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2_000);
  }, [copied]);

  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <Button className={"mx-2"} onClick={() => setDlModOpen(true)}>
          <i className="bi bi-download" />
        </Button>

        <Button
          className={"mx-2"}
          onClick={async (_e) => {
            await copyToClipboard(
              `${window.location.protocol}//${
                window.location.host
              }/?${getFaceQuery(fumoFace)}`
            );
            setCopied(true);
          }}
        >
          <i className={`bi ${copied ? "bi-check2" : "bi-share"}`} />
        </Button>
        <div
          className={`${cssToast.toast} ${
            copied ? cssToast.shown : cssToast.hidden
          }`}
        >
          Copied face URL to clipboard!
        </div>

        <a
          href="https://github.com/SartoRiccardo/fumo-face-maker"
          target="_blank"
        >
          <Button className={"mx-2"}>
            <i className="bi bi-github" />
          </Button>
        </a>

        <a href="https://ko-fi.com/sarto" target="_blank">
          <Button className={"mx-2"}>
            <i className="bi bi-cup-hot-fill" />
          </Button>
        </a>
      </div>
      <DownloadModal show={dlModOpen} onHide={() => setDlModOpen(false)} />
    </>
  );
}
