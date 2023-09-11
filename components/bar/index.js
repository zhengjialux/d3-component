import { useEffect } from 'react'
import * as d3 from 'd3'
import { axisBottom, axisLeft } from "@/utils";

// 基础柱状图
export const Bar = ({ data }) => {
  useEffect(() => {
    // Declare the chart dimensions and margins.
    const styles = {
      width: 600,
      height: 400,
      margin: [20, 20, 30, 40]
    }

    // Declare the x (horizontal position) scale.
    const x = d3.scaleBand()
      .domain(d3.groupSort(data, ([d]) => -d.frequency, (d) => d.letter)) // descending frequency
      .range([styles?.margin[3], styles?.width - styles?.margin[1]])
      .padding(0.1);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.frequency)])
      .range([styles?.height - styles?.margin[2], styles?.margin[0]]);

    // SVG container.
    const svg = d3.select('.bar')
      .attr('width', styles?.width)
      .attr('height', styles?.height)
      .attr("viewBox", [0, 0, styles?.width, styles?.height])
      .attr("style", "max-width: 100%; height: auto;");

    // Add a rect for each bar.
    svg.append("g")
      .attr("fill", "steelblue")
      .selectAll()
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.letter))
      .attr("y", (d) => y(d.frequency))
      .attr("height", (d) => y(0) - y(d.frequency))
      .attr("width", x.bandwidth());

    // Add the x-axis.
    svg.append('g')
      .attr('transform', `translate(0,${styles?.height - styles?.margin[2]})`)
      .call(axisBottom(x))

    // Add the y-axis.
    svg.append('g')
      .attr('transform', `translate(${styles?.margin[3]},0)`)
      .call(axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
      .call(g => g.append("text")
        .attr("x", -styles?.margin[3])
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Frequency (%)"));
  }, [])

  return <svg className='bar' />
}