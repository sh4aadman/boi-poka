function PrimaryButton({ text, colorHex, bgHex, borderColor, onClick }) {
  return (
    <button onClick={onClick}
      style={{ color: colorHex, backgroundColor: bgHex, borderColor: borderColor }}
      className="px-2 lg:px-4 py-1.5 lg:py-3 border font-bold text-sm lg:text-base rounded-lg"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
