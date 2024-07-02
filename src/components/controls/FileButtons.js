import { useState } from "react";
import Button from "./Button";
import { useAppSelector } from "@/lib/store";
import { selectFumoFace } from "@/features/fumoFaceSlice";
import { getFaceQuery } from "@/features/fumoFaceSlice";
import download from "downloadjs";

export default function FileButtons() {
  const fumoFace = useAppSelector(selectFumoFace);
  const [isDownloading, setDownloading] = useState(false);

  const generateFace = async (_e) => {
    setDownloading(true);
    const params = new URLSearchParams({
      eyes: fumoFace.eyes + 1,
      eyelashes: fumoFace.eyelash + 1,
      eyebrows: fumoFace.eyebrows + 1,
      mouth: fumoFace.mouth + 1,
      heterochromia: fumoFace.hasHeterochromia,
      diff_clr_outline: fumoFace.hasDifferentEyeOutline,
    });
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + "/face?" + params.toString()
      );
      const blob = await response.blob();
      download(blob, "generated.DST", "application/octet-stream");
    } catch (ex) {}
    setDownloading(false);
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <Button
        className={"mx-2"}
        disabled={isDownloading}
        onClick={generateFace}
      >
        <i className="bi bi-download" />
      </Button>

      <Button
        className={"mx-2"}
        onClick={(_e) =>
          navigator.clipboard.writeText(
            `${window.location.protocol}//${
              window.location.host
            }/?${getFaceQuery(fumoFace)}`
          )
        }
      >
        <i className="bi bi-share" />
      </Button>

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
  );
}
