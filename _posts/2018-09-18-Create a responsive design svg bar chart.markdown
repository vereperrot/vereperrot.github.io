---
layout: post
title:  "Create a responsive design svg bar chart"
date:   2018-09-18 00:01:57 +0800
categories: svg d3js
---
## Code
```html
<html>
<head>
    <title></title>
<style>
.svg-container {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* aspect ratio */
    vertical-align: top;
    overflow: hidden;
}
.svg-content-responsive {
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 0;
}
</style>
</head>
<body>
<div id="chartId">
</div>
<!--<svg id="barChart"></svg>-->
<script src='https://d3js.org/d3.v4.min.js'></script>

<script>
var data = [80, 120, 60, 300, 600];
var barHeight = 20;
d3.select("div#chartId")
   .append("div")
   .classed("svg-container", true) //container class to make it responsive
   .append("svg")
   //responsive SVG needs these 2 attributes and no width and height attr
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 600 400")
   //class to make it responsive
   .classed("svg-content-responsive", true);
var bar = d3.select('svg').append('g')
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('width', function(d) {  return d; })
          .attr('height', barHeight - 1)
          .attr('transform', function(d, i) {
            return "translate(0," + i * barHeight + ")";
          });
</script>

</body>
</html>
```
![d3-responsive-bar-chart](/assets/d3-responsive-bar-chart.PNG)
