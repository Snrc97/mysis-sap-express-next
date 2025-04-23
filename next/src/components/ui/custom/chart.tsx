import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,

} from "recharts";
import { CustomTooltip } from "./custom-tool-tip";

type ChartProps = {
  data: { name: string; value: number }[];
  title?: string;
};

export const Chart: React.FC<ChartProps> = ({ data, title }) => {
  return (
    <div className="bg-dark shadow rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4"> {title || "Sample Bar Chart"}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip label={"Değer"} content={
            <CustomTooltip label="s" />
         } />
          <Legend content={<></>} />
          <Bar dataKey="value" fill="#fff" radius={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
