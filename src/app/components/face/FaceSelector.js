import OptionShift from "../controls/OptionShift";

const EYEBROWS = [];
const EYES = [];
const BLUSHES = [];
const MOUTHS = [];

export default function FaceSelector() {
  const hasBlush = false;

  return (
    <div className={"panel shadow"}>
      <OptionShift options={EYEBROWS.length}>Eyebrow</OptionShift>
      <OptionShift options={EYES.length}>Eye</OptionShift>
      {hasBlush && <OptionShift options={BLUSHES.length}>Blush</OptionShift>}
      <OptionShift options={MOUTHS.length}>Mouth</OptionShift>
    </div>
  );
}
