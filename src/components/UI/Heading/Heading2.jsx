function Heading2({ text, colorHex, align }) {
  return (
    <h3
      style={{ color: colorHex, textAlign: align }}
      className="font-secondary font-bold text-4xl"
    >
      {text}
    </h3>
  );
}

export default Heading2;
