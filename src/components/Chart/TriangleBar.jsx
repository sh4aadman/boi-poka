function getPath(x, y, width, height) {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z
  `;
}

function TriangleBar({ x, y, width, height, payload }) {
  if (
    x === undefined ||
    y === undefined ||
    width === undefined ||
    height === undefined
  ) {
    return null;
  }

  return (
    <path
      d={getPath(x, y, width, height)}
      fill={payload.color}
      stroke="none"
    />
  );
}

export default TriangleBar;