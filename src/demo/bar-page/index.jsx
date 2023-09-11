import React from "react";
import * as d3 from "d3";
import { Bar } from "@/components";
import dataList from "./mock-data.json";

export default class BarPage extends React.Component {

  render() {
    return (
      <div style={{ padding: 24, background: '#f1f3f4', borderRadius: '10px' }}>
        <Bar data={dataList} />
      </div>
    )
  }
}
