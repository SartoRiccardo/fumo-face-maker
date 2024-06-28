"use client";
import Modal from "react-bootstrap/Modal";
import { useAppSelector } from "@/lib/store";
import ThreadColor from "./ThreadColor";
import { selectThreadColors } from "@/features/fumoFaceSlice";

export default function ThreadColorInfo({ show, onHide }) {
  // const threadColors = useAppSelector(selectThreadColors);
  const fumoFace = useAppSelector((state) => state.fumoFace);

  let threadColors = [
    {
      color: "white",
      description: (
        <>
          The color of the little eye shine on the top left of each eye.{" "}
          <b>You should keep it white.</b>
        </>
      ),
    },
  ];
  if (fumoFace.hasHeterochromia) {
    threadColors.splice(
      0,
      0,
      {
        color: "red",
        description: (
          <>
            The color of the <b>left</b> eye. Can be any color you want.
          </>
        ),
      },
      {
        color: "blue",
        description: (
          <>
            The color of the <b>right</b> eye. Can be any color you want.
          </>
        ),
      }
    );
  } else {
    threadColors.splice(0, 0, {
      color: "red",
      description: <>The color of the eyes. Can be any color you want.</>,
    });
  }

  if (fumoFace.hasDifferentEyeOutline) {
    threadColors.push({
      color: "darkred",
      description: (
        <>The color of the outline of the eyes. Can be any color you want.</>
      ),
    });
    if (fumoFace.hasHeterochromia)
      threadColors.push(
        {
          color: "darkred",
          description: (
            <>
              The color of the outline of the <b>left</b> eye. Can be any color
              you want.
            </>
          ),
        },
        {
          color: "darkblue",
          description: (
            <>
              The color of the outline of the <b>right</b> eye. Can be any color
              you want.
            </>
          ),
        }
      );
  }
  threadColors.push({
    color: "black",
    description: (
      <>
        The color of the eyebrows and mouth. <b>You should keep it black.</b>
      </>
    ),
  });

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Body>
        <p>
          These are the order of the thread colors you should use when
          embroidering the file. This website uses the color of the eyes as
          placeholders, but you can substitute them for any color you'd like.
        </p>
        <p>
          Note that{" "}
          <b>the generated file does not have information about thread color</b>
          , so it might look weird on your embroidery machine. As long as you
          put the threads in the correct order you'll be fine.
        </p>
        <hr />
        {threadColors.map(({ color, description }) => (
          <div className={"row"} key={color}>
            <div className={"col-auto"}>
              <ThreadColor color={color} />
            </div>
            <div className={"col"}>
              <div
                className={"d-flex flex-column justify-content-center h-100"}
              >
                <p className={"my-0"}>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
}
