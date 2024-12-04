/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define props for the reusable component
interface AreaChartProps {
  data: Array<Record<string, any>>; // Array of data objects
  xKey: string; // Key for the x-axis (e.g., 'name')
  yKey: string; // Key for the y-axis (e.g., 'uv')
  strokeColor?: string; // Line color
  fillColor?: string; // Fill color
  width?: string | number; // Chart width
  height?: string | number; // Chart height
}

const ReusableAreaChart: React.FC<AreaChartProps> = ({
  data,
  xKey,
  yKey,
  strokeColor = "#8884d8", // Default stroke color
  fillColor = "#8884d8", // Default fill color
  width = "100%", // Default width
  height = 400, // Default height
}) => {
  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={yKey} stroke={strokeColor} fill={fillColor} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReusableAreaChart;
