import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import TriangleBar from "./TriangleBar";
import { useMemo } from "react";
import CustomTick from "./CustomTick";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28BFF",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
];

function Chart({ height, data, dataKeyX, dataKey }) {
  const chartData = useMemo(
    () =>
      data.map((item, idx) => ({
        ...item,
        color: COLORS[idx % COLORS.length],
      })),
    [data],
  );

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={chartData}>
        <XAxis dataKey={dataKeyX} tick={<CustomTick />} />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey={dataKey} shape={<TriangleBar />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
