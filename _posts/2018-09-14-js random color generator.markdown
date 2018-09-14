---
layout: post
title:  "js random color generator"
date:   2018-09-14 00:01:57 +0800
categories: javascript
---
```javascript
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
```
