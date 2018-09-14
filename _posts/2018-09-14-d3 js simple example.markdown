---
layout: post
title:  "d3 js simple example"
date:   2018-09-14 00:01:57 +0800
categories: d3js javascript
---
```html
<html>
<head>
    <title>Learn D3 in 5 minutes</title>
</head>
<body>
<script src='https://d3js.org/d3.v4.min.js'></script>

<!-- 1.Change the color of header text -->
<h3>Today is a beautiful day!!</h3>
<script>
    d3.select('h3').style('color', 'darkblue');
    d3.select('h3').style('font-size', '24px');
</script>

<!-- 2.fill in some items into an unorder list -->
<ul> </ul>
<script>
    var fruits = ['apple', 'mango', 'banana', 'orange'];
    d3.select('ul')
        .selectAll('li')
        .data(fruits)
        .enter()
        .append('li')
        .text(function(d) { return d; });
</script>

<!-- 3.draw a green rectangle -->
<svg>
</svg>
<script>
//Select SVG element
var svg = d3.select('svg');
//Create rectangle element inside SVG
svg.append('rect')
   .attr('x', 50)
   .attr('y', 50)
   .attr('width', 200)
   .attr('height', 100)
   //.attr('fill', 'green');
   .attr('style', 'fill:green;stroke-width:3;stroke:rgb(0,0,0)');
</script>

<!-- 4.draw a bar chart-->
<svg id="barChart" width='200' height='500'></svg>
<script>
var data = [80, 120, 60, 150, 200];
var barHeight = 20;
var bar = d3.select('svg#barChart')
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

<!-- 5.click button to append text -->
<button id="btn">test</button>
<script>
d3.select('#btn')
        .on('click', function () {
            d3.select('body')
               .append('h3')
               .text('Today is a beautiful day!!');
        });
</script>

</body>
</html>
```

## Reference
* [Learn D3.js in 5 minutes](https://medium.freecodecamp.org/learn-d3-js-in-5-minutes-c5ec29fb0725)

