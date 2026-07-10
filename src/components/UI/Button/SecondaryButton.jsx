function SecondaryButton({ text, colorHex, bgHex }) {
  return (
    <button style={{ color: colorHex, backgroundColor: bgHex }} className="px-4 py-1.5 font-primary rounded-4xl">{text}</button>
  );
}

export default SecondaryButton;
