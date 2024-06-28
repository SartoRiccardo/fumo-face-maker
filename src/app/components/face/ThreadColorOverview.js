import ThreadColor from "./ThreadColor";

export default function ThreadColorOverview() {
  return (
    <div className={"panel shadow my-3"}>
      <div className={"row"}>
        <div className={"col-auto"}>
          <div className={"d-flex flex-column justify-content-center h-100"}>
            <p className={"my-0"}>Thread Colors</p>
          </div>
        </div>
        <div className={"col"}>
          <ThreadColor color="red" />
          <ThreadColor color="blue" />
          <ThreadColor color="green" />
          <ThreadColor color="magenta" />
          <ThreadColor color="yellow" />
        </div>
      </div>
    </div>
  );
}
