function PrimaryButton({ text, colorHex, bgHex, borderColor, onClick }) {
  return (
    <button onClick={onClick}
      style={{ color: colorHex, backgroundColor: bgHex, borderColor: borderColor }}
      className="px-4 py-3 border font-bold rounded-lg"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
