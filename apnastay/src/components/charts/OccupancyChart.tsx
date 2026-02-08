"use client";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 70 },
  { month: "Feb", value: 75 },
  { month: "Mar", value: 82 },
  { month: "Apr", value: 88 },
];

export default function OccupancyChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FF7A18"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
