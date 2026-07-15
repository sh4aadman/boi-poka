function SecondaryButton({ text, colorHex, bgHex }) {
  return (
    <button style={{ color: colorHex, backgroundColor: bgHex }} className="px-2 lg:px-4 py-1 lg:py-1.5 font-primary rounded-4xl">{text}</button>
  );
}

export default SecondaryButton;
