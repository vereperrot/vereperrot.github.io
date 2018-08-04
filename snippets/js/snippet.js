
function copySnippet() {
  var copyText = document.getElementById("myInput");
  
  var list = document.querySelector("pre");
var code = list.querySelector("code");
//console.log(code.innerHTML);

//	copyText.setAttribute("style","white-space: pre-wrap;");
   copyText.value=strip(code.innerHTML);
  copyText.select();
  document.execCommand("copy");
  
  //alert("Copied the text: " + copyText.value);
}


function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
//	console.log(tmp.textContent);
//	console.log(tmp.innerText);
   return tmp.textContent || tmp.innerText || "";
}
function searchSnippet() {
//console.log("in searchSnippet");
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
//console.log(ul);
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
var link= li[i].querySelector("a");
//console.log(link.text);
        /*if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }*/
        if (link.text.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function blockCheck() {
    var x = document.getElementsByClassName("adsbygoogle");
    if(x[0].style.height){
//	alert("no block");
	}else{
//	alert("blocked");
		document.body.innerHTML = document.body.innerHTML + 
"		 <div id=\"id01\" class=\"w3-modal\" style=\"display:block\">"+
"    <div class=\"w3-modal-content w3-card-4\">"+
"      <header class=\"w3-container w3-yellow\"> "+
"        <span onclick=\"document.getElementById('id01').style.display='none'\" "+
"        class=\"w3-button w3-display-topright\">&times;</span>"+
"        <h2>Vere Perrot Snippets</h2>"+
"      </header>"+
"      <div class=\"w3-container\">"+
"        <p>Please pause adblock on this site.</p>"+
"      </div>"+
"      <footer class=\"w3-container w3-yellow\">"+
"      <p>"+
"        <a href=\"https://github.com/perrot\">Perrot Github</a>"+
"        </p>"+
"      </footer>"+
"    </div>"+
"  </div>";
	}
    //x[0].innerHTML = x[0].style.height;
}
blockCheck();
