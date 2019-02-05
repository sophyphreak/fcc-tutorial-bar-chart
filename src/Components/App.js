import React, { Component } from 'react';
import * as d3 from 'd3';
import './App.css';

import {withFauxDOM} from 'react-faux-dom'

class Line extends React.Component {

    componentDidMount() {
       const faux = this.props.connectFauxDOM('div', 'chart');

       // D3 Code to create the chart
       // using faux as container

       const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
       
       const w = 300;
       const h = 120;
       
       const svg = d3
         .select(faux)
         .append('svg')
         .attr('width', w)
         .attr('height', h);
       
       svg
         .selectAll('rect')
         .data(dataset)
         .enter()
         .append('rect')
         .attr('x', (d, i) => i * 30)
         .attr('y', (d, i) => h - 3 * d)
         .attr('width', 25)
         .attr('height', (d, i) => d * 3)
         .attr('fill', 'navy')
         .attr('class', 'bar')
         .append('title')
         .text(d => d);
       
       svg
         .selectAll('text')
         .data(dataset)
         .enter()
         .append('text')
         .text(d => d)
         .attr('x', (d, i) => i * 30)
         .attr('y', (d, i) => h - (d * 3 + 3));
    }

    render() {
      return (
         <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1em'
         }}>
            {this.props.chart}
         </div>

   )}
}

export default withFauxDOM(Line);