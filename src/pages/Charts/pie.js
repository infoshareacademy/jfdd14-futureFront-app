import React, { Component } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import "./pie.css";
import { database } from "../../components/fireBase.config";

var cat = database.ref("category");
cat.on("value", getCat);

function getCat(data) {
  console.log(data);
}

const data = [
  { name: "Fotografia", value: 400 },
  { name: "Muzyka", value: 355 },
  { name: "Sport", value: 155 },
  { name: "Inne", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PieTemp extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

  render() {
    return (
      <ResponsiveContainer width={"100%"} height={500}>
        <PieChart>
          <Legend
            layout="vertical"
            align="left"
            verticalAlign="middle"
            height={36}
          />
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
