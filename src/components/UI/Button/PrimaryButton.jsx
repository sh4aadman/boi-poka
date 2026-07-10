function PrimaryButton({ text, colorHex, bgHex }) {
  return (
    <button
      style={{ color: colorHex, backgroundColor: bgHex }}
      className="px-4 py-3 font-bold rounded-lg"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
