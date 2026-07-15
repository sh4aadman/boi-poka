function CustomTick({ x, y, payload }) {
  return (
      <text x={x} y={y + 20} textAnchor="middle" className="font-primary">
      {payload.value}
    </text>
  );
}

export default CustomTick;
