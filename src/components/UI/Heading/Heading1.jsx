function Heading1({ text, colorHex }) {
  return (
    <h2
      style={{ color: colorHex }}
      className="font-secondary font-bold text-6xl leading-20"
    >
      {text}
    </h2>
  );
}

export default Heading1;
