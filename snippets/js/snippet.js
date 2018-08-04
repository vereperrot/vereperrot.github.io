
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
