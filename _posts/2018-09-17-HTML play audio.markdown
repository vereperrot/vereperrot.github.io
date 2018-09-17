---
layout: post
title:  "HTML play audio"
date:   2018-09-17 00:01:57 +0800
categories: html audio javascript
---
## Code
```html
<!DOCTYPE html>
<html>
<body>

<audio id="myAudio">
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<p>Click the buttons to play or pause the audio.</p>

<button onclick="playAudio()" type="button">Play Audio</button>
<button onclick="pauseAudio()" type="button">Pause Audio</button> 

<script>
var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
} 
</script>

</body>
</html>

```
## Reference
* [Convert mp3 to ogg](https://audio.online-convert.com/convert-to-ogg)
* [Convert wav to mp3](https://online-audio-converter.com/)
* [W3school audio play](https://www.w3schools.com/jsref/met_audio_play.asp)
* [Download sound effects](https://freesound.org/browse/tags/sound-effects/)
