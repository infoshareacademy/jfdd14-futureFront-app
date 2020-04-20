import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { database } from "../../components/fireBase.config";

const data = [
  {
    name: "January",
    Users: 3,
    Favorites: 15,
    amt: 2400,
  },
  {
    name: "February",
    Users: 33,
    Favorites: 56,
    amt: 2210,
  },
  {
    name: "March",
    Users: 56,
    Favorites: 55,
    amt: 2290,
  },
  {
    name: "April",
    Users: 123,
    Favorites: 123,
    amt: 2000,
  },
  {
    name: "May",
    Users: 144,
    Favorites: 155,
    amt: 2181,
  },
  {
    name: "June",
    Users: 155,
    Favorites: 197,
    amt: 2500,
  },
  {
    name: "July",
    Users: 234,
    Favorites: 405,
    amt: 2100,
  },
];

export default class BarTemp extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <div style={{ width: "100%", height: 600 }}>
        <ResponsiveContainer width={"100%"} height={600} F>
          <LineChart
            data={data}
            margin={{
              top: 15,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Users"
              stroke="#ff7f50"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Favorites"
              stroke="#82ca9d"
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
