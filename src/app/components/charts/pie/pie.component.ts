import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() data = [];
  @Input() id = 'chart';

  constructor() { }

  ngOnInit() {
    const width = d3.select(`#${this.id} .chart`).node().getBoundingClientRect().width;
    const height = 200;
    const margin = 40;

    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select(`#${this.id} .chart`)
      .append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const color = d3.scaleOrdinal()
      .domain(this.data)
      .range(['#ffa500', '#ff0000', '#0000ff']);

    const pie = d3.pie()
      .value((d) => d.value.value);

    const g = svg
      .selectAll('whatever')
      .data(pie(d3.entries(this.data)))
      .enter();
    g.append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
      )
      .attr('fill', (d) => (color(d.data.key)))
      .attr('stroke', 'white')
      .style('stroke-width', '1px')
      .style('opacity', 0.7);
  }
}
