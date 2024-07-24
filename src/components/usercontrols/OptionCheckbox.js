export default function OptionCheckbox({ children, value, onChange }) {
  return (
    <div className="row">
      <div className="col">{children}</div>
      <div className="col-auto">
        <div className="form-check form-switch">
          <input
            checked={value}
            onChange={(evt) => onChange(evt.target.checked)}
            className="form-check-input"
            type="checkbox"
            style={{ width: "3em" }}
          />
        </div>
      </div>
    </div>
  );
}
