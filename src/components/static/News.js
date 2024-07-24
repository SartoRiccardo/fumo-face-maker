import { Modal } from "react-bootstrap";
import Button from "../usercontrols/Button";

const NEWS_TEXT = [
  {
    date: "24th Jul 2024",
    desc: (
      <ul>
        <li>Generated files are now PES files instead of DST.</li>
        <li>Files now contain color info</li>
        <li>You can now choose the color info for your eyes.</li>
      </ul>
    ),
  },
  { date: "2nd Jul 2024", desc: "Initial Release." },
];

export default function News({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Body>
        <h2 className="text-center">Fumo Face Maker</h2>
        <p className="text-center px-3 px-md-5">
          Bugs? Suggestions? Contributions? Contact me on{" "}
          <a href="https://twitter.com/sartouhou" target="_blank">
            Twitter
          </a>
          ,{" "}
          <a href="https://www.instagram.com/sartouhou/" target="_blank">
            Instagram
          </a>{" "}
          or make an issue on the{" "}
          <a
            href="https://github.com/SartoRiccardo/fumo-face-maker"
            target="_blank"
          >
            Github Repo
          </a>
          .
        </p>
        <hr />
        {NEWS_TEXT.map(({ date, desc }) => (
          <div key={date}>
            <h3 className="fs-5">{date}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} className={"primary"}>
          Got it
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
