import { useState } from "react";
import Button from "./Button";
import { useAppSelector } from "@/lib/store";
import { selectFumoFace } from "@/features/fumoFaceSlice";
import { getFaceQuery } from "@/features/fumoFaceSlice";
import download from "downloadjs";
import copyToClipboard from "clipboard-copy";

export default function FileButtons() {
  const fumoFace = useAppSelector(selectFumoFace);
  const [isDownloading, setDownloading] = useState(false);

  const generateFace = async (_e) => {
    setDownloading(true);

    const paramsDict = {
      eyes: fumoFace.eyes.chosen[0] + 1,
      eyelashes: fumoFace.eyelash + 1,
      eyebrows: fumoFace.eyebrows + 1,
      mouth: fumoFace.mouth + 1,
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
        onClick={async (_e) =>
          await copyToClipboard(
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
