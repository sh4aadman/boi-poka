function Tag({ text, colorHex, bgHex }) {
  return <p style={{ color: colorHex, backgroundColor: bgHex }} className="px-4 py-1.5 font-primary rounded-4xl">{text}</p>;
}

export default Tag;
