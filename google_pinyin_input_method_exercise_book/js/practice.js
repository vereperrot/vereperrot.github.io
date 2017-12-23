app.controller('personCtrl', function($scope) {
	/*
    var consonant=["ㄅ","ㄆ","ㄇ","ㄈ","ㄉ","ㄊ","ㄋ","ㄌ","ㄍ","ㄎ","ㄏ","ㄐ","ㄑ","ㄒ","ㄓ","ㄔ","ㄕ","ㄖ","ㄗ","ㄘ","ㄙ"];
    var consonantAns=["b","p","m","f","d","t","n","l","g","k","h","j","q","x","zh","ch","sh","r","z","c","s"];
    var vowel=["ㄚ","ㄛ","ㄜ","ㄝ","ㄞ","ㄟ","ㄠ","ㄡ","ㄢ","ㄣ","ㄤ","ㄥ","ㄦ"];
    var vowelAns=["a","o","e","e","ai","ei","ao","ou","an","en","ang","eng","er"];
    */

    var count=Array.apply(null, Array(_data.length)).map(Number.prototype.valueOf,0);
    var idx=-1;
    $scope.test="";
    $scope.input = "";

    $scope.question = function() {
    	idx=Math.floor( Math.random() * ( (_data.length-1) + 1 ) );//from 0 to len-1
		console.log(idx);
        $scope.test=_data[idx];
    };
    
	$scope.question();
    $scope.loadHint= function() {
      var str=`<table class=\"table table-striped\">
	<tbody>`;
	str+="<tr>";
	str+="<th>注音</th>";
	var arr=[];
        for(var i=0;i<count.length;i++){
		str+="<td>"+_data[i]+"</td>";
		arr.push(i);
		if((i+1)%10==0){
			arr=[];
			str+="</tr>";

			str+="<tr style=\"color:blue\">";
			str+="<th>拚音</th>";
			for(var j=i-9;j<=i;j++){
				str+="<td>"+_ans[j]+"</td>";
			}
			str+="</tr>";

			str+="<tr>";
			str+="<th>注音</th>";
		}
        }
	console.log(arr);
	console.log(_ans[20]);
        if(arr.length>0){
		str+="<tr style=\"color:blue\">";
		str+="<th>拚音</th>";
        }
        for(var i=0;i<arr.length;i++){
		str+="<td>"+_ans[arr[i]]+"</td>";
	}
	if(arr.length>0){
		str+="</tr>";
	}
	    /*
	str+="<tr>";
	str+="<th>拚音</th>";
        for(var i=0;i<count.length;i++){
		str+="<td style=\"color:blue\">"+_ans[i]+"</td>";
        }
	str+="</tr>";
	*/
	 str+="</tbody>";
	  str+="</table>";
	console.log("loadHint: "+str);
	$("#hint").append(str);
	//console.log($("#hint").html());
    };
	$scope.loadHint();
    
    $scope.status = function() {
      if($scope.input.length==0)return "";
      var tmp=0;
      for(var i=0;i<count.length;i++){
	if(count[i]==0) break;
        tmp++;
      }
      var str="<table class=\"table table-striped\">";
      str+="<thead><tr><th>注音</th><th>拼音</th><th>次數</th>";
      str+="</tr></thead><tbody>";
      if(tmp==count.length){
	var color="";
	for(var i=0;i<count.length;i++){
		str+="<tr>";
		str+="        <td>"+_data[i]+"</td>";
		str+="        <td>"+_ans[i]+"</td>";
		if(count[i]>0) color="green";else color="red";
		str+="        <td style=\"color:"+color+"\">"+count[i]+"</td>";
		str+="      </tr>";
        }
	 str+="</tbody>";
	  str+="</table>";
	      console.log(str);
	$("#statusBody").append(str);
       return "";
      }
      if($scope.input.length==_ans[idx].length){
	      if($scope.input==_ans[idx]){
		  $scope.question();
		  $scope.input="";
		  count[idx]++;
		  return "success";
	      }
	      else{
		  count[idx]--;
		  return "error";
	      }
      }
    };
});

$(document).ready(function () {
        var url = window.location;
        $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        var a=$('ul.nav a').filter(function() {
             return this.href == url;
        });
	a.parent().addClass('active');

	$("#idHint").text(a.text()+"提示");
});

