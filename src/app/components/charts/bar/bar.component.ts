import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() id = 'chart';
  @Input() max: number;
  @Input() bottomText = '';
  @Input() leftText = '';

  constructor() { }

  ngOnInit() {
    const margin = {top: 20, right: 20, bottom: 50, left: 60};
    const width = d3.select(`#${this.id} .chart`).node().getBoundingClientRect().width - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);
    const y = d3.scaleLinear()
      .range([height, 0]);

    const svg = d3.select(`#${this.id} .chart`).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    this.data.forEach((d) => {
      d.value = +d.value;
    });

    x.domain(this.data.map((d) => d.label)).padding(0.3);
    y.domain([0, this.max ? this.max : d3.max(this.data, (d) => d.value)]);

    svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('y', 20)
    .attr('x', -20)
    .attr('dy', '.35em')
    .attr('transform', 'rotate(-20)')
    .style('text-anchor', 'start');

    svg.append('g')
      .call(d3.axisLeft(y).tickSize(-width).ticks(4))
      .call(g => g.select('.domain').remove());

    svg.selectAll('.bar')
      .data(this.data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.label))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => height - y(d.value))
      .attr('fill', 'rgb(71, 101, 199)');

    svg.append('text')
      .text(this.bottomText)
      .attr('x', width / 2)
      .attr('y', height + margin.bottom - 5)
      .attr('text-anchor', 'middle');

    svg.append('g')
    .attr('transform', `translate(${-margin.left + 10}, ${height / 2})`)
    .append('text')
      .text(this.leftText)
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)');
  }

}
