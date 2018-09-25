---
layout: post
title:  "ConvNetJS test"
date:   2018-09-21 00:01:57 +0800
categories: convnetjs deep-learning
---
## Prepare

1. Download convnetjs_release.zip and uzip it.
1. Change directory to convnetjs_release
```
cd convnetjs_release
```
1. Create index.html  

```html
<html>
<head>
<title>minimal demo</title>
 
<!-- CSS goes here -->
<style>
body {
  background-color: #FFF; /* example... */
}
</style>
 
<!-- import convnetjs library -->
<script src="build\convnet-min.js"></script>
 
<!-- javascript goes here -->
<script type="text/javascript">
 
function periodic() {
  var d = document.getElementById('egdiv');
  d.innerHTML = 'Random number: ' + Math.random()
}
 
var net; // declared outside -> global variable in window scope
function start() {
  // this gets executed on startup
  //... 
  net = new convnetjs.Net();
  // ...
 
  // example of running something every 1 second
  setInterval(periodic, 1000);
}
 
</script>
</head>
 
<body onload="start()">
<div id="egdiv"></div>
</body>
</html>

```

4. python -m SimpleHTTPServer
5. Go to URL http://127.0.0.1:8000/  
![convnetjs-simple](/assets/convnetjs-simple.PNG)
