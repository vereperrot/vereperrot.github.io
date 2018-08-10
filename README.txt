A Pen created at CodePen.io. You can find this one at http://codepen.io/perrot/pen/wKNaWo.

[ADD adsense]
https://www.w3schools.com/w3css/w3css_colors.asp

<script>
function bodyLoad(){
	blockCheck();
}

function blockCheck() {
    var x = document.getElementsByClassName("adsbygoogle");
      if(x[0].style.height){
	}else{
		showBlockPage();
	}
}
function showBlockPage(){
		document.body.innerHTML = document.body.innerHTML + 
"		 <div id=\"id01\" class=\"w3-modal\" style=\"display:block\">"+
"    <div class=\"w3-modal-content w3-card-4\">"+
"      <header class=\"w3-container w3-light-grey\"> "+

"        <h2>Vere Perrot Snippets</h2>"+
"      </header>"+
"      <div class=\"w3-container\">"+
"        <p>Please pause adblock on this site.</p>"+
"      </div>"+
"      <footer class=\"w3-container w3-light-grey\">"+
"      <p>"+
"        <a href=\"https://github.com/perrot\">Perrot Github</a>"+
"        </p>"+
"      </footer>"+
"    </div>"+
"  </div>";
</script>

 onload="bodyLoad()"