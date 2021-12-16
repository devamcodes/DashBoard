import React from "react";

import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const Bars = ({ width, height, grid, Data, dataKeyName, Columns }) => {
  return (
    <>
      <BarChart width={width} height={height} data={Data}>
        {grid /* && <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey={dataKeyName} />
        <YAxis />
        <Tooltip />
        <Legend />
        {Columns &&
          Columns.map((barItem, index) => {
            return (
              <Bar
                key={index}
                dataKey={barItem.dataIndex}
                fill={barItem.fill}
                barSize={10}
                radius={[10, 10, 0, 0]}
              />
            );
          })}
      </BarChart>
    </>
  );
};

function Graphics({ dataBar, columnsBar }) {
  return (
    <>
      <Bars
        Data={dataBar}
        Columns={columnsBar}
        grid={true}
        width={700}
        height={300}
      />
    </>
  );
}

export default Graphics;
