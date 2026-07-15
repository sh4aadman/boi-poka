function Tag({ text, colorHex, bgHex }) {
  return <p style={{ color: colorHex, backgroundColor: bgHex }} className="px-1 md:px-2 lg:px-4 py-1.5 font-primary text-sm lg:text-base rounded-4xl">{text}</p>;
}

export default Tag;
