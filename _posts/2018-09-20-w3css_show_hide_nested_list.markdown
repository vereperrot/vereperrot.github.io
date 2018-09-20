---
layout: post
title:  "w3css_show_hide_nested_list"
date:   2018-09-20 00:01:57 +0800
categories: w3css list
---
![w3css_show_hide_nested_list](/assets/w3css_show_hide_nested_list.png)
```html
<!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body>

<div class="w3-container">
 <!--<i id="angle">&rsaquo;</i> 
  <button onclick="openList1()" class="w3-btn w3-white w3-block w3-left-align"><img id="angle"src="caret-right.png"/>	<i class="fa fa-building"></i><span style="padding-left: 35px;">Toggle hide and show</span></button>-->
  <ul class="w3-ul w3-card-4">
	    <li class="w3-display-container w3-blue   li" style="border-bottom:0px;cursor: pointer;"><a onclick="openList1()" style="display:block"><i id="angle"class="fa fa-sort-up"></i><i class="w3-button w3-transparent w3-display-left fa fa-pencil" style="    margin-left: 30px;"></i><span style="    margin-left: 50px;">Jill</span></a> <i onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right fa fa-trash"></i></li>
  <!--style="display:none"-->
	  <ul class="w3-ul w3-card-4"id="ollist" style="display:none">
    <li class="w3-display-container li"><i class="w3-button w3-transparent w3-display-left fa fa-pencil" ></i> <span style="padding-left: 30px;">Jill</span> <i onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right fa fa-trash"></i></li>
    
    
    <li class="w3-display-container li" style="border-bottom:0px">Adam <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right">&times;</span></li>
    <li class="w3-display-container li" style="border-bottom:0px">Eve <span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right">&times;</span></li>
	</ul>
  </ul>
</div>

<script>
function openList1() {
var angle= document.getElementById("angle");
    var list = document.getElementById("ollist");

    if (list.style.display == "none"){
        list.style.display = "block";
        //angle.innerHTML="v";
//angle.setAttribute("src","caret-down.png");
        angle.className=angle.className.replace("fa-sort-up","fa-sort-down");
    }else{
        list.style.display = "none";
        //angle.innerHTML="&rsaquo;";
//angle.setAttribute("src","caret-right.png");
        angle.className=angle.className.replace("fa-sort-down","fa-sort-up");
    }
    console.dir(angle);
}
</script>

</body>
</html>
```

