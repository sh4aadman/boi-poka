function Heading1({ text, colorHex }) {
  return (
    <h2
      style={{ color: colorHex }}
      className="font-secondary font-bold md:text-2xl lg:text-6xl md:leading-12 lg:leading-20"
    >
      {text}
    </h2>
  );
}

export default Heading1;
