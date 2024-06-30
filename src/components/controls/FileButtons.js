import Button from "./Button";

export default function FileButtons() {
  return (
    <div className="d-flex justify-content-center">
      <Button className={"mx-2"}>
        <i className="bi bi-download" />
      </Button>
      <Button className={"mx-2"}>
        <i className="bi bi-share" />
      </Button>
      <Button className={"mx-2"}>
        <i className="bi bi-github" />
      </Button>
      <Button className={"mx-2"}>
        <i className="bi bi-cup-hot-fill" />
      </Button>
    </div>
  );
}
