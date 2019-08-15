function getScore(key){
	var qs;
	qs= JSON.parse(localStorage.getItem(key) || "[]");
	var score=0;
	for(var i=0;i<qs.length;i++){
		if(qs[i].r) score++;
	}
	return score;
}

document.getElementById("score").innerHTML="<i class=\"fa fa-heart w3-text-red\" style=\"color:red\"></i> "+parseInt(getScore("hq")+getScore("eq"));
console.log(document.getElementById("score").innerHTML);
window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
