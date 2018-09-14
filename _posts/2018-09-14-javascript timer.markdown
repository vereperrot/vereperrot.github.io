---
layout: post
title:  "javascript timer"
date:   2018-09-14 00:01:57 +0800
categories: javascript
---
## simple code
```javascript
var myVar = setInterval(myTimer, 1000);
clearTimeout(myVar);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
```

## Reference
* [w3school js timing](https://www.w3schools.com/js/js_timing.asp)

