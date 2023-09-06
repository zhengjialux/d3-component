import React from "react";
import { Bar } from "@/components";
const dataList = require("./mock-data.csv");

export default class BarPage extends React.Component {
  state = { dataList }

  render() {
    const { dataList } = this.state

    return (
      <div style={{ padding: 24, background: '#f1f3f4', borderRadius: '10px' }}>
        <Bar data={dataList} />
      </div>
    )
  }
}
