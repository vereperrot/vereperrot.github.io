var _mainTimer;
var _flashTimer;
const TITLE_TEXT="Interval Alarm";
const INTERVAL_SECONDS = "IntervalSeconds";
const ENABLE_SOUND="EnableSound";
var _totalSeconds=0;
var _flashMessage="";

function startTimer() {
	var start=document.getElementById("btnStart");
	var stop=document.getElementById("btnStop");

	enableButton(stop,start);
	clearInterval(_flashTimer);
	_totalSeconds=0;
	updateTime(_totalSeconds.toString().toHHMMSS());
	_mainTimer = setInterval(main, 1000);
}

function updateTime(text){
	var elm=document.getElementById("timeDisplay");
	elm.innerText=text;
}

function enableButton(enableBtn, disableBtn){
    disableBtn.setAttribute("class","w3-btn w3-round-xxlarge w3-black w3-block w3-disabled");
    enableBtn.setAttribute("class","w3-btn w3-round-xxlarge w3-black w3-block");
}

function stopTimer() {
	var start=document.getElementById("btnStart");
	var stop=document.getElementById("btnStop");
	
	enableButton(start,stop);
    clearInterval(_mainTimer);
   
    _flashMessage=document.getElementById("timeDisplay").innerText;
    _flashTimer = setInterval(flash, 500);
}

function flash(){
	var elm=document.getElementById("timeDisplay");
	elm.innerText=_flashMessage;
}

function main() {
	var enableSound=localStorage.getItem(ENABLE_SOUND);
	var intervalSecs=parseInt(localStorage.getItem(INTERVAL_SECONDS));
    _totalSeconds++;
    updateTime(_totalSeconds.toString().toHHMMSS());
    if(_totalSeconds%intervalSecs==0)
    {
        if(enableSound){
            var x = document.getElementById("myAudio"); 
            x.play(); 
        }
    }
}

String.prototype.toHHMMSS = function () {
	var sec_num = parseInt(this, 10); // don't forget the second param
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (hours   < 10) {hours   = "0"+hours;}
	if (minutes < 10) {minutes = "0"+minutes;}
	if (seconds < 10) {seconds = "0"+seconds;}
	return hours+':'+minutes+':'+seconds;
}

function initial(){
	
	updateTime('00:00:00');
	if(localStorage.getItem(INTERVAL_SECONDS)==null){
		localStorage.setItem(INTERVAL_SECONDS, 30);
	}
	if(localStorage.getItem(ENABLE_SOUND)==null){
		localStorage.setItem(ENABLE_SOUND, true);
	}
}
initial();
window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
